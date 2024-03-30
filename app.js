const buttons = document.querySelectorAll("button");
const createButton = buttons[0];
const insertButton = buttons[1];
const codeArea = document.querySelector("#codearea");
const p1 = document.querySelector("p");
const tableData = [];
let tableName;
let numberOfAttributes;
function clearArray() {
  tableData.splice(0, tableData.length);
}

function createButtonHandler() {
  clearCode();
  clearArray();
  tableName = prompt("TABLE NAME");
  numberOfAttributes = prompt("ENTER NUMBER OF ATTRIBUTES");
  for (let i = 1; i <= numberOfAttributes; i++) {
    const nameOfAttribute = prompt(`ENTER ${i} VARIABLE NAME:`);
    const dataType = prompt("ENTER DATA TYPE");
    const declaration = {
      varName: nameOfAttribute,
      varType: dataType,
      value: null,
    };
    tableData.push(declaration);
  }
  displayCreateTableCode();
}

function clearCode() {
  codeArea.textContent = " ";
}

function displayCreateTableCode() {
  codeArea.textContent = `create table ${tableName}(`;
  for (const data of tableData) {
    const p = document.createElement("p");
    p.textContent = `${data.varName} ${data.varType}, `;
    codeArea.append(p);
  }
  const p = document.createElement("p");
  p.textContent = `);`;
  codeArea.append(p);
}
function insertButtonHandler() {
  clearCode();
  let numberOfRows = prompt("ENTER THE NUMBER OF ROWS:");
  codeArea.textContent = `Insert into ${tableName}(`;
  let terminationDeterminer = numberOfAttributes;
  for (const data of tableData) {
    terminationDeterminer--;
    codeArea.textContent = codeArea.textContent + `${data.varName}`;
    if (terminationDeterminer == 0)
      codeArea.textContent = codeArea.textContent + `)`;
    else codeArea.textContent = codeArea.textContent + `,`;
  }
  const p = document.createElement("p");
  p.textContent = `Values`;
  codeArea.append(p);
  let terminationDeterminer2 = numberOfRows;
  for (let i = 1; i <= numberOfRows; i++) {
    terminationDeterminer2--;
    for (let data of tableData) {
      const attributeValue = prompt(`ENTER ${data.varName} for Row ${i}`);
      data.value = attributeValue;
    }
    const p = document.createElement("p");
    terminationDeterminer = numberOfAttributes;
    p.textContent = `(`;
    for (let data of tableData) {
      terminationDeterminer--;
      p.textContent = p.textContent + `${data.value}`;
      if (terminationDeterminer == 0) p.textContent = p.textContent + `)`;
      else p.textContent = p.textContent + `,`;
    }
    if (terminationDeterminer2 == 0) p.textContent = p.textContent + `;`;
    else p.textContent = p.textContent + `,`;
    //  p.textContent = p.textContent + `);`
    codeArea.append(p);
  }
}
// INSERT INTO table_name(column_1,column_2,column_3) VALUES (value_1,value_2,value_3);

function displayInsertTableCode() {}

createButton.addEventListener("click", createButtonHandler);
insertButton.addEventListener("click", insertButtonHandler);
console.log(tableData);
