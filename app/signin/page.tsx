function SigninPage() {
  return (
    <section className="flex flex-col align-center p-5">
      <div className="unauth-header">
        <h2 className="text-center mb-5">Welcome to Chat GPT Clone</h2>
        <div className="actions align-center justify-center flex">
          <button className="bg-indigo-500 rounded px-5 py-2 hover:bg-indigo-400 hover:text-white">Sign-in</button>
        </div>
      </div>
      <div className="auth-header">

      </div>
    </section>
  )
}

export default SigninPage