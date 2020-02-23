class utils {
  sortArrayWithObject = (array: any[], objParam: string) => {
    return array.sort((a, b) => {
      let aType = a[objParam];
      let bType = b[objParam];
      if (typeof aType === "string") {
        aType.toLowerCase();
      }
      if (typeof bType === "string") {
        bType.toLowerCase();
      }
      if (aType < bType) {
        return -1;
      }
      if (aType > bType) {
        return 1;
      }
      return 0;
    });
  };
}

export default new utils();
