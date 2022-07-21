export default function HeadSocialIcons() {
  return (
    <div>
      <div className="headerIconsRow">
        <div className="headerIcons">
          <a
            href="https://discord.gg/uuvbs9DJ7H"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/Discord.svg"
              alt="Discord"
              height={30}
              width={30}
            />
          </a>
        </div>
        <div className="headerIcons">
          <a
            href="https://twitter.com/nfcomrades"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/Twitter.svg"
              alt="Twitter"
              height={30}
              width={30}
            />
          </a>
        </div>
        <div className="headerIcons">
          <a
            href="https://panthart.com/roadmap"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/Roadmap.svg"
              alt="Project Paper"
              height={30}
              width={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
