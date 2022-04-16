function BlogForm() {
  return (
    <form className="max-w-lg w-full mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="title"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Image
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="image"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Description
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="description"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Details
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="details"
        />
      </div>
      <button className="px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
        Submit
      </button>
    </form>
  );
}

export default BlogForm;
