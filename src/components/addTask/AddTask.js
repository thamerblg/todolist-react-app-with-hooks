import "./AddTask.css";

const AddTask = ({ isEditing, hundelSubmit, textTask, setTextTask }) => {
  return (
    <form onSubmit={(e) => hundelSubmit(e)}>
      <div id="input">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new Task..."
          value={textTask}
          onChange={(e) => setTextTask(e.target.value)}
        />
        <button className="submit-btn">{isEditing ? "edit" : "submit"}</button>
      </div>
    </form>
  );
};

export default AddTask;
