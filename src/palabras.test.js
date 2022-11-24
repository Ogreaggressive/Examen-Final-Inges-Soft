import {anadirString, returnSet, getFrase} from "./palabras"

describe("anade palabras a la lista", () => {
    it("anade 1 palabra", () => {
        anadirString("hola")
        let set = new Set()
        set.add("hola")
      expect(returnSet()).toEqual(set);
    });
    it("anade otra palabra", () => {
        anadirString("que tal")
        let set = new Set()
        set.add("hola")
        set.add("que tal")
      expect(returnSet()).toEqual(set);
    });
  });

  describe("separa la frase en palabras", () => {
    it("separa en 2", () => {
        let respArray = ["hola", "buenas"]
      expect(getFrase("hola buenas")).toEqual(respArray);
    });
  });