import { createContext } from "react";
import useFirebase from "../hooks/useFirebase.js";
import useDoctorInfo from "../hooks/useDoctorInfo.js";
import useServices from "../hooks/useServices.js";
import useBlogs from "../hooks/useBlogs.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
    const doctors = useDoctorInfo()
    const blogs = useBlogs();
    const services = useServices();
    const allAuthInfo = useFirebase();
  const data = {
      blogs,
      allAuthInfo,
      doctors,
      services,
    };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
