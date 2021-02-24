function exportExpl1(params) {
  console.log('1 1 1 1 1 1 1 1 11  1');
}

function exportExpl2(params) {
  console.log('222 2 2 2 2 2 2 2 2 2 ');
}

function foo() {
  console.log('Default is ok!!');
}

// export { exportExpl1, exportExpl2 };

module.exports = {
  foo,
  exportExpl1,
  value2: exportExpl2,
};
