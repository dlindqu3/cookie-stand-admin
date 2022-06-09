

export default function Footer({ formDataLength }){
  return (
    <footer className="px-8 py-6 bg-green-600 text-gray-800">
    <p>{formDataLength}</p>
</footer>
  )
}