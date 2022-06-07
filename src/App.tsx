import hashlipsLogo from "./logo.png";
import thirdwebLogo from "./thirdweb-logo.png";
import previewGIF from "./preview.gif";

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
      <header className="flex flex-col items-center justify-center p-6 md:p-12">
        <img className="h-12 md:h-14" src={hashlipsLogo} />
        <p>Minting Page</p>
      </header>
      <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-2xl font-bold text-secondary">
            Minting Tutorial NFT
          </h1>
          <p className="text-center leading-relaxed">
            HashLips is a place where NFT enthusiasts and programmers gather
            together to collect, code, trade and talk about anything and
            everything regarding programming and blockchain technology!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-sm flex-col space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-md">
              <img className="aspect-square object-cover" src={previewGIF} />
            </div>

            <div className="flex max-w-sm justify-between">
              <p>Total Minted</p>
              <p>0 / 5</p>
            </div>

            <div className="flex justify-center">
              <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-75">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center space-x-2 p-6">
        <p className="text-sm">Powered by</p>
        <img className="h-4 md:h-4" src={thirdwebLogo} />
      </footer>
    </div>
  );
}

export default App;
