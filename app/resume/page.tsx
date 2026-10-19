export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          My Resume
        </h1>

        <div className="h-[80vh] w-full overflow-hidden rounded-lg bg-white shadow-lg">
          <iframe
            src="/resume/resume.pdf"
            className="h-full w-full rounded-lg"
            title="Resume"
          />
        </div>

        <a
          href="/resume/resume.pdf"
          download
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}