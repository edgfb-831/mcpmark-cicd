// Intentional linting errors for testing
const unusedVar = "test" // Unused variable (error), double quotes (error)
let anotherVar = "hello" // Double quotes (error)
console.log(anotherVar) // Console log (warn)
function badFunc() {
  return "oops" // Double quotes (error)
}
badFunc()
let x = 1 // Missing semicolon (error)
