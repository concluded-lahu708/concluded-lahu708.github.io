export interface Creator {
  name: string;
  role: string;
  description: string;
  avatar: string;
  link: string;
}

export const creators: Creator[] = [
  {
    name: "stghecker",
    role: "Founder & Lead Developer",
    description:
      "Builds the Raspberry Pi interface server and the PiSTG web experience. Drives architecture, features, and the project roadmap.",
    avatar:
      "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    link: "https://github.com/stghecker",
  },
  {
    name: "PiSTG Team",
    role: "Design & Documentation",
    description:
      "Shapes the look and feel of the dashboard and keeps the docs clear so anyone can install and run PiSTG on their Pi.",
    avatar:
      "https://images.pexels.com/photos/8837261/pexels-photo-8837261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    link: "https://linktr.ee/stghecker",
  },
  {
    name: "Community Contributors",
    role: "Open Source Contributors",
    description:
      "Report issues, suggest features, and submit pull requests that make PiSTG better for everyone in the Raspberry Pi community.",
    avatar:
      "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    link: "https://github.com/stghecker/raspberry-pi-interface-server",
  },
];
