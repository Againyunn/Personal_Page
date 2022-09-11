import Click2Open from "@/components/main/Click2Open";
import MainContent from "@/components/main/MainContent";

function MainPage(props) {
  return (
    <div>
      <MainContent />
      <Click2Open />
    </div>
  );
}

// layout set
MainPage.layout = "H1";

export default MainPage;
