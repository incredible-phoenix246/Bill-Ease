interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  imageUrl?: string;
}

type SidebarProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};

type SidebarFooterProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: "open-sidebar" | "settings" | "logout";
};

export { User, SidebarProps, SidebarFooterProps };
