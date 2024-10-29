
async function AboutId({ params }) {
  // Wait for params to be available
  const id = await params.id;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-20">
      <div className="container mx-auto p-10 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-start gap-5">
          <h1 className="text-4xl font-bold">About Page {id}</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutId; 