<>
  <meta charSet="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Me</title>
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  {/* header start */}
  <header
    className="bg-black fixed top-0 left-0 w-full flex 
     items-center z-10 border-b border-gray-600"
  >
    <div className="container">
      <div className="flex items-center justify-between relative">
        <div className="px-4">
          <a
            href="index.html"
            className="font-bold text-lg text-blue-600 block px-8 py-6"
          >
            FadlanAruf
          </a>
        </div>
        <nav className="rounded-2xl bg-gray-800 text-white flex justify-between items-center py-3 px-5">
          <div className="space-x-4"></div>
          <ul className="flex items-center text-xs space-x-5 text-gray-300">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="keahlian.html">Keahlian</a>
            </li>
            <li>
              <a href="pendidikan.html">Pendidikan</a>
            </li>
            <li>
              <a href="hubungi.html">Hubungi</a>
            </li>
            <a href="biodata.html">Biodata</a>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  {/* header end */}
  {/* Home Section Start */}
  <section id="Home" className="pt-1">
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-3">
          <section className="keahlian-section">
            <h1 className="section-title">Biodata</h1>
            <div className="keahlian-item">
              <h2 className="institusi text-4xl">Profil:</h2>
              <p className="tahun">Nama: Fadlan Amar Ma'ruf </p>
              <p className="tahun">Panggilan: Aruf </p>
              <p className="tahun">
                Tempat Tanggal Lahir: Perawang, 22 Maret 2005{" "}
              </p>
              <p className="tahun">
                Hobi: Bermain Game, Menerjemah dan Mendesain{" "}
              </p>
              <p className="tahun">Umur: 20 Tahun </p>
              <p className="tahun">Tempat Tinggal: Perawang Barat</p>
              <p className="tahun">Agama: Islam</p>
              <p className="tahun">Tinggi Badan: 167cm</p>
              <p className="tahun">Berat Badan: 65kg</p>
              <p className="tahun">Kewarganegaraan: Indonesia</p>
              <p className="tahun">Golongan Darah: A</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  {/* Home Section End */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .keahlian-section {\n          max-width: 1280px;\n          margin: 60px auto;\n          padding: 1px;\n          font-family: \"Cantora One\", sans-serif;\n          text-align: left; \n      }\n      \n      .section-title {\n          font-size: 4.5rem;\n          color: #fafafa;\n          margin-bottom: 30px;\n          position: relative;\n          display: inline-block; \n      }\n      \n      .keahlian-item {\n          margin-bottom: 25px;\n          text-align: left; \n      }\n      \n      .buatan {\n          font-size: 1.8rem;\n          color: #f3f3f3;\n          margin: 10px 0;\n          line-height: 1.3;\n      }\n      \n      .tahun {\n          font-size: 1.1rem;\n          color: #7f8c8d;\n          margin: 5px 0;\n          display: block;\n      }\n      \n    \n      .section-title::after {\n          content: '';\n          display: block;\n          width: 60%;\n          height: 3px;\n          background: #3498db;\n          margin: 1px auto;\n      }\n      "
    }}
  />
  <div id="root" />
</>
