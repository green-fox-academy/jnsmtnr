import { Animal } from "./animal";
import { breedWithEggs } from "./breed-with-eggs";

export class Bird extends Animal implements breedWithEggs{
  breed(): string {
    return 'laying eggs.';
  }

}