export default {
  fetch(request) {
    return new Response(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Hello World</title>
<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: radial-gradient(circle at top, #1e3c72, #2a5298);
    font-family: system-ui, -apple-system, BlinkMacSystemFont;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(14px);
    border-radius: 20px;
    padding: 50px 70px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.35);
    text-align: center;
    animation: float 4s ease-in-out infinite;
  }

  h1 {
    font-size: 3rem;
    color: #fff;
    margin: 0;
    letter-spacing: 2px;
  }

  p {
    color: rgba(255,255,255,0.85);
    margin-top: 12px;
    font-size: 1.1rem;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Hello World 👋</h1>
    <p>Powered by Cloudflare Workers ⚡</p>
  </div>
</body>
</html>
`, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};
