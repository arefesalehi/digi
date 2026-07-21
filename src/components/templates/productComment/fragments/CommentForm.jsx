

const CommentForm = () => {
  return (
    <>
    <div className="flex flex-col bg-blue-50 my-10 ml-5 border border-gray-300 rounded h-auto text-sm">

        <div className="flex flex-col my-3">
            <p className="mx-5 my-2">نام شما:</p>
            <input className="mx-5 border-none rounded h-10 text-xs" type="text" placeholder="مثال: عارفه صالحی" />
        </div>

        <div className="flex flex-col my-3">
            <p className="mx-5 my-2"> پست الکترونیکی:</p>
            <input className="mx-5 border-none rounded h-10 text-xs" type="email" placeholder="example:arefesa@gmail.com" />
        </div>

        <div className="flex flex-col my-3">
            <p className="mx-5 my-2"> نظرات:</p>
            <textarea className="mx-5 mb-5 border-none rounded h-35 text-xs" type="text" placeholder=" " />
        </div>

    </div>

    </>
  )
}

export default CommentForm