type User = {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  profile_image: string | null;
  home_address?: string | null;
  work_address?: string | null;
  school_address?: string | null;
};

const user: User = {
  firstname: "samuel",
  lastname: "kabera nshuti",
  email: "kaberanshutis@gmail.com",
  phone_number: "+250799316720",
  profile_image: null,
};

export default user;
