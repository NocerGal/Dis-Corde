export type ExistingServerSideBarProps = {};

export const ExistingServerSideBar = (props: ExistingServerSideBarProps) => {
  return (
    <nav className="w-[72px]">
      <ul>
        {Array.from({ length: 17 }).map((server, index) => (
          <li key={index}>p</li>
        ))}
      </ul>
    </nav>
  );
};
