import { Session } from "next-auth";
import { useState, useEffect } from "react";
import ContactForm from "@/components/formulario/ContactForm"; // Importa el componente ContactForm


interface UserCredentialsLoggerProps {
  session: Session | null;
}

const UserCredentialsLogger: React.FC<UserCredentialsLoggerProps> = ({ session }) => {
  const email = session?.user?.email; // Accede a la propiedad 'email' de session.user si existe
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

  return (
    <div>
      {email && <ContactForm email={email} />} {/* Renderiza ContactForm solo si email existe */}
    </div>
  );
};

export default UserCredentialsLogger;
