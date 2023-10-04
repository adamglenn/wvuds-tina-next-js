import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export const CalFeed = ({
  feed,
  gridClasses,
}) => {
  const calFeed = useScript(feed);
  return (
    <div className="text-sm mb-10 not-prose">
      <h2 className="font-wvu-shout leading-wvu-shout text-3xl text-wvu-blue mb-5">Events</h2>
      <ul id="localist-widget-52631272" className={`localist-widget list-none ps-0 ${gridClasses}`}></ul>
      <li className="grid grid-cols-10 gap-4 mb-6 sr-only" aria-hidden="true">
        <div className="col-span-2">
          <div className="bg-wvu-gold pt-2 text-center shadow-lg">
            <div className="bg-white p-3">
              <span className="block uppercase font-helvetica-neue-bold leading-4 mb-1 text-xs"></span>
              <span className="block text-2xl font-helvetica-neue-light leading-4" id="aria__date--{{ event.id }}"></span>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <h2 className="font-helvetica-neue-bold leading-tight text-lg mb-3">
            <a href="{{ event.url }}" aria-labelledby="aria__title--{{ event.id }} aria__date--{{ event.id }}">
              <span id="aria__title--{{ event.id }}">
              </span>
            </a>
          </h2>
          <p className="leading-tight mb-3">
            <span title="{{ event.starts_at }} to {{ event.ends_at }}">
            </span>
          </p>
          <p className="leading-tight mb-3">
          </p>
          <a href="{{ event.url }}" className="text-xs text-blue-400">
            View on Calendar <span className="sr-only"></span> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-1 -mr-1 w-6 h-6 opacity-80 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
          </a>
        </div>
      </li>
    </div>
  )
}