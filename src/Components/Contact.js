export default function Contact() {
  return (
    <>
      <div className={`bg-1`}></div>

      <div className="PageTitle">
        <span className="Title">Contact Me</span>
      </div>
      <ul>
        <li>
          <span class="icon">
            <a href="#about">
              <i class="fa fa-user" aria-hidden="true"></i>User
            </a>
          </span>
          <span class="text">About Me</span>
        </li>
        <li>
          <span class="icon">
            <a href="mailto:chirags1725@gmail.com">
              <i class="fa fa-envelope"></i>Mail
            </a>
          </span>
          <span class="text">Email</span>
        </li>
        <li>
          <span class="icon">
            <a
              class="tel"
              rel="noreferrer"
              href="https://t.me/Chirags1725"
              target="_blank"
            >
              <i class="fa fa-telegram">Telegram</i>
            </a>
          </span>
          <span class="text">Telegram</span>
        </li>
        <li>
          <span class="icon">
            <a
              class="tel"
              rel="noreferrer"
              href="https://github.com/chirags1725"
              target="_blank"
            >
              <i class="fa fa-telegram">Github</i>
            </a>
          </span>
          <span class="text">Telegram</span>
        </li>
        <li>
          <span class="icon">
            <a
              class="tel"
              rel="noreferrer"
              href="https://stackoverflow.com/users/15529831/chirag"
              target="_blank"
            >
              <i class="fa fa-telegram"></i>Stackoverflow
            </a>
          </span>
          <span class="text">Telegram</span>
        </li>
      </ul>
    </>
  );
}
