import { breedWithEggs } from "./breed-with-eggs";
import { Animal } from "./animal";

export class Reptile extends Animal implements breedWithEggs {
  breed(): string {
    return 'laying eggs.'
  }

}