// pages/student/[...slug].js

export async function getServerSideProps({ req, res, params }) {
  const url = `http://93.177.64.145:7818/student/${params.slug.join('/')}`;

  const fetchRes = await fetch(url, {
    method: req.method,
    headers: req.headers,
  });

  const html = await fetchRes.text();

  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();

  return { props: {} };
}

export default function ProxyPage() {
  return null; // Already streamed from backend
}
