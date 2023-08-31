import { Session } from "next-auth";
import { useState, useEffect } from "react";

interface UserCredentialsLoggerProps {
  session: Session | null;
}

const UserCredentialsLogger: React.FC<UserCredentialsLoggerProps> = ({ session }) => {
  const { email } = session?.user || {};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      console.log("Credenciales del usuario:", email);
    }
    setIsLoading(false);
  }, [email]);

  if (isLoading) {
    return null; // O cualquier contenido de carga que desees
  }

  return null;
};

export default UserCredentialsLogger;
