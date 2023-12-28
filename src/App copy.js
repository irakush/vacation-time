// import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import Search from './Search.jsx'

function App() {
  return (
    <div className="App">
      <Header />

      <Search />
      <br></br>
      <div className="card-container">
        <div className="card">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdfbb4b1-4ba1-4ef2-afd6-2843359b5c65/dfs8x24-866a3bf3-a38c-419b-8204-7030fb4f20dc.jpg/v1/fill/w_768,h_1024,q_75,strp/rpg_40_a_most_beautiful_woman_closeup_face_centere_by_jaredsyn_dfs8x24-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JkZmJiNGIxLTRiYTEtNGVmMi1hZmQ2LTI4NDMzNTliNWM2NVwvZGZzOHgyNC04NjZhM2JmMy1hMzhjLTQxOWItODIwNC03MDMwZmI0ZjIwZGMuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8DisOL1RCl6nyi5jGxGIb9jg8dPutYlbB4bDoGO-FoI"
            alt="Avatar" />
          <div className="card-text">
            <h4 className="text-title"><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdfbb4b1-4ba1-4ef2-afd6-2843359b5c65/dfs8x24-866a3bf3-a38c-419b-8204-7030fb4f20dc.jpg/v1/fill/w_768,h_1024,q_75,strp/rpg_40_a_most_beautiful_woman_closeup_face_centere_by_jaredsyn_dfs8x24-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JkZmJiNGIxLTRiYTEtNGVmMi1hZmQ2LTI4NDMzNTliNWM2NVwvZGZzOHgyNC04NjZhM2JmMy1hMzhjLTQxOWItODIwNC03MDMwZmI0ZjIwZGMuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8DisOL1RCl6nyi5jGxGIb9jg8dPutYlbB4bDoGO-FoI"
            alt="Avatar"  />
          <div className="card-text">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdfbb4b1-4ba1-4ef2-afd6-2843359b5c65/dfs8x24-866a3bf3-a38c-419b-8204-7030fb4f20dc.jpg/v1/fill/w_768,h_1024,q_75,strp/rpg_40_a_most_beautiful_woman_closeup_face_centere_by_jaredsyn_dfs8x24-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JkZmJiNGIxLTRiYTEtNGVmMi1hZmQ2LTI4NDMzNTliNWM2NVwvZGZzOHgyNC04NjZhM2JmMy1hMzhjLTQxOWItODIwNC03MDMwZmI0ZjIwZGMuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8DisOL1RCl6nyi5jGxGIb9jg8dPutYlbB4bDoGO-FoI"
            alt="Avatar"  />
          <div className="card-text">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdfbb4b1-4ba1-4ef2-afd6-2843359b5c65/dfs8x24-866a3bf3-a38c-419b-8204-7030fb4f20dc.jpg/v1/fill/w_768,h_1024,q_75,strp/rpg_40_a_most_beautiful_woman_closeup_face_centere_by_jaredsyn_dfs8x24-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JkZmJiNGIxLTRiYTEtNGVmMi1hZmQ2LTI4NDMzNTliNWM2NVwvZGZzOHgyNC04NjZhM2JmMy1hMzhjLTQxOWItODIwNC03MDMwZmI0ZjIwZGMuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8DisOL1RCl6nyi5jGxGIb9jg8dPutYlbB4bDoGO-FoI"
            alt="Avatar"  />
          <div className="card-text">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdfbb4b1-4ba1-4ef2-afd6-2843359b5c65/dfs8x24-866a3bf3-a38c-419b-8204-7030fb4f20dc.jpg/v1/fill/w_768,h_1024,q_75,strp/rpg_40_a_most_beautiful_woman_closeup_face_centere_by_jaredsyn_dfs8x24-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JkZmJiNGIxLTRiYTEtNGVmMi1hZmQ2LTI4NDMzNTliNWM2NVwvZGZzOHgyNC04NjZhM2JmMy1hMzhjLTQxOWItODIwNC03MDMwZmI0ZjIwZGMuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8DisOL1RCl6nyi5jGxGIb9jg8dPutYlbB4bDoGO-FoI"
            alt="Avatar"  />
          <div className="card-text">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/048c06fa82780c7d7ab2fe1b7405b3a38ddc37a7/big-b25e7c9df7cb2af0177c13781613327d.jpg"
            alt="Avatar"  />
          <div className="card-text">
            <small>test</small>
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </div>
  );
}

export default App;
