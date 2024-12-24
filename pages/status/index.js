import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </div>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <div style={styles.statusItem}>
      <span style={styles.statusLabel}>Última atualização:</span>
      <span>{updatedAtText}</span>
    </div>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  const carregando = "Carregando...";

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Database</h2>
      <div style={styles.statusItem}>
        <span style={styles.statusLabel}>Versão:</span>
        <span>
          {isLoading ? carregando : data.dependencies.database.postgres_version}
        </span>
      </div>
      <div style={styles.statusItem}>
        <span style={styles.statusLabel}>Conexões abertas:</span>
        <span>
          {isLoading
            ? carregando
            : data.dependencies.database.opened_connections}
        </span>
      </div>
      <div style={styles.statusItem}>
        <span style={styles.statusLabel}>Conexões máximas:</span>
        <span>
          {isLoading ? carregando : data.dependencies.database.max_connections}
        </span>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2D3748",
    marginBottom: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    marginBottom: "15px",
    color: "#4A5568",
    fontWeight: "600",
  },
  statusItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    padding: "15px",
    backgroundColor: "#F7FAFC",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  statusLabel: {
    fontWeight: "bold",
    color: "#4A5568",
  },
  section: {
    marginTop: "25px",
  },
};
