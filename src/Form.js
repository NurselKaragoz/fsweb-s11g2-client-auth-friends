export default function MyForm() {
  return (
    <>
      <label>
        USERNAME <hr />
        <input name="myInput" />
      </label>
      <hr />

      <label>
        PASSWORD <hr />
        <input name="myInput" />
      </label>
      <hr />
      <button type="submit">Submit form</button>
    </>
  );
}
