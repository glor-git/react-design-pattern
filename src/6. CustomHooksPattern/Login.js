import useLogin from "./useLogin";

export default function Login() {
  const { form, onChange, onSubmit } = useLogin();
  const { email, name, password } = form;

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>이메일</label>
          <input type={'text'} value={email} onChange={onChange} name={'email'} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type={'password'} value={password} onChange={onChange} name={'password'} />
        </div>
        <div>
          <label>이름</label>
          <input type={'text'} value={name} onChange={onChange} name={'name'} />
        </div>
        <button type={'submit'}>로그인</button>
      </form>
    </div>
  )
}