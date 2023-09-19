export default function NewHostelRoute() {
    return(
        <div>
      <p>Add your own Hostel</p>
      <form method="post">
        <div>
          <label>
            Name: <input className="border" type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea className="border" name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button-main">
            Add
          </button>
        </div>
      </form>
    </div>
    );
}