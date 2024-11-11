import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { scrollToTop } from "themes";
import { api } from "api/api";
import { toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();

  const [nomeCompleto, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(senha)

  const handleRegister = async (event: any) => {
    event.preventDefault();
    if (senha !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }

    if (senha.length < 6 && confirmPassword.length < 6){
      toast.error("A senha precisa ter no minimo 6 caracteres");
      return
    }

    const userData = {
      nomeCompleto,
      birthDate,
      cpf,
      email,
      senha,
    };

    try {
      const response = await api.post("users/register", userData);

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.success("Ocorreu um erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <section id={styles.area}>
        <div id={styles.formArea}>
          <div id={styles.innerFormArea}>
            <div className={styles.title}>
              <p>Fazer Cadastro</p>
              <p>Que tal criar uma conta para aproveitar nossos produtos?</p>
            </div>
            <form onSubmit={handleRegister}>
              <input
                className="second-input-enter-data"
                placeholder="Nome completo"
                type="text"
                value={nomeCompleto}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="second-input-enter-data"
                placeholder="Data de nascimento"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
              <input
                className="second-input-enter-data"
                placeholder="CPF"
                type="number"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              <input
                className="second-input-enter-data"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="second-input-enter-data"
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="second-input-enter-data"
                placeholder="Confirme sua senha"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Button text="Cadastrar" type="submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
