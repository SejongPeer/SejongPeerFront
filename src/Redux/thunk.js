import {
  apiRequest,
  apiSuccess,
  apiFailure301,
  apiFailure404,
  API_FAILURE_301,
  API_SUCCESS,
} from "./Actions";
import { useNavigate } from "react-router-dom";

export const fetchData = (sourceComponent, navigate, id) => {
  return async (dispatch) => {
    console.log("Called from:", sourceComponent);
    dispatch(apiRequest());

    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/check-permissions",
        {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );

      console.log("response.status " + response.status);

      if (response.status === 301) {
        console.log("301 detected");
        dispatch({
          type: API_FAILURE_301,
          error: "no Cookie",
          source: sourceComponent,
        });
        if (sourceComponent === "UserMenu") {
          navigate("/login");
        } else if (sourceComponent === "Buddy") {
          alert("로그인 후 이용이 가능합니다.");
          navigate("/login");
        }
      } else if (response.status === 200) {
        console.log("have Cookie");
        dispatch({ type: API_SUCCESS, source: sourceComponent });
        if (sourceComponent === "UserMenu") {
          navigate("/mypage");
        } else if (sourceComponent === "Buddy") {
          navigate("/buddy/matching");
        } else if (sourceComponent === "Honbob") {
          console.log("혼밥매칭~출발~~~");
          navigate("/honbob/matching");
        }
      }

      const data = await response.json();
      dispatch(apiSuccess(data));
    } catch (error) {
      switch (error.message) {
        case "Not Found":
          dispatch(apiFailure404(error.message));
          break;
      }
    }
  };
};
