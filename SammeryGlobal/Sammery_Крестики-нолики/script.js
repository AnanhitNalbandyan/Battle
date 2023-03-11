//<Model>
const store = {
   curentTurn: 0,//! 0 ===0, 1===x
   field: [2, 2, 2, 2, 2, 2, 2, 2, 2]//! 0===поле 0, 1=== поле x, 2===поле пустое
};

const changeCurrentTurn = (value) => {
   store.curentTurn = value;
   onChange();

}

const markFieldItem = (ind, value) => {
   store.field[ind] = value;
   onChange();
}
//</Model>

//<View>
function draw() {
   const html = [];

   const title = document.createElement("div");
   title.innerHTML =
      store.curentTurn === 0 ?
         "ходят нолики" : "ходят хики";
      html.push(title);

   const grid = document.createElement("div");
   grid.className = "grid";

   for (let i = 0; i < 9; i++){
      const item = document.createElement("div");
      item.classList = "item";
      item.addEventListener("click", function () {
         if (store.field[i] === 2) {
            onItemClick(i)
         }
      })

      item.innerHTML =
         store.field[i] === 0 ? "0" :
            store.field[i] === 1 ? "x" :
               " ";
      grid.append(item);
   }
   html.push(grid);

   const container = document.querySelector("#container");//!const container = documentElementById("container")
   container.innerHTML = "";
   html.forEach(function (item) {
      container.append(item);
   });
}

   
//</View>

// <Controller>
function onChange() {
   draw();
}
const onItemClick = (ind) => {
   markFieldItem(ind, store.curentTurn);
   changeCurrentTurn(store.curentTurn === 0 ? 1 : 0);
}

// </Controller>
draw();


