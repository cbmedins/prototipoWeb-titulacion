import { Session } from "next-auth";

interface UserCredentialsLoggerProps {
  session: Session | null;
}

const UserCredentialsLogger: React.FC<UserCredentialsLoggerProps> = ({ session }) => {
  if (!session) return null;

  console.log("Credenciales del usuario:", session.user);

  return null;
};

export default UserCredentialsLogger;
