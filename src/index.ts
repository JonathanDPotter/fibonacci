import "./sass/style.scss";

const form = document.forms[0];
const h2 = document.getElementsByTagName("h2")[0];
const dialog = document.getElementsByTagName("dialog")[0];
const about = document.getElementById("about") as HTMLInputElement;

h2.innerText = "Enter a sequence length to see the results!";

const fibRec = (i: number, sequence: number[] = []): number[] =>
  i === 0
    ? sequence
    : sequence.length === 0
    ? fibRec(i - 1, [0])
    : sequence.length === 1
    ? fibRec(i - 1, [0, 1])
    : fibRec(i - 1, [
        ...sequence,
        sequence[sequence.length - 1] + sequence[sequence.length - 2],
      ]);

const handleSubmit = (event: any) => {
  event.preventDefault();
  h2.innerText = fibRec(parseInt(event.target?.elements["number"].value))
    .join(", ")
    .toString();
};

form.addEventListener("submit", (event) => handleSubmit(event));
about?.addEventListener("click", () => dialog.showModal());
