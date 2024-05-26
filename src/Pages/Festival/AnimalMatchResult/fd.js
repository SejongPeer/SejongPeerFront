const renderAnimalCards = (animalTypes, isSelf) => {
    return animalTypes.map((animalType, index) => {
      const animalImageKey = getAnimalImageKey(animalType, isSelf);
      const animalImage = ANIMAL_IMAGES[animalImageKey];
  
      if (!animalImage) {
        console.error(`Image not found for ${animalImageKey}`);
        return null;
      }
  
      return (
        <Container key={index}>
          <CardContainer2>
            <Card>
              <AnimalImage src={animalImage} alt={ANIMAL_TYPES[animalType]} />
              <AnimalName>{ANIMAL_TYPES[animalType]}상!</AnimalName>
            </Card>
          </CardContainer2>
        </Container>
      );
    });
  };
  