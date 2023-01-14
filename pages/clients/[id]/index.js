import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log("ClientProjectsPage", router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projectb" },
    });
  }

  return (
    <div>
      <h1>The Projects fo a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
