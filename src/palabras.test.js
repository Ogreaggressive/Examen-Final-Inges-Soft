import {anadirString, returnSet} from "./palabras"

describe("anade palabras a la lista", () => {
    it("anade 1 palabra", () => {
        anadirString("hola")
        let set = new Set()
        set.add("hola")
      expect(returnSet()).toEqual(set);
    });
  });