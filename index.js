import { packd_export_2 } from 'https://srv.divriots.com/packd/solid-element,solid-js,solid-js/web';const { template: _$template } = packd_export_2;;
const { delegateEvents: _$delegateEvents } = packd_export_2;;
const { insert: _$insert } = packd_export_2;;

const _tmpl$ = _$template(`<div><style>div * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }</style><button>-</button><span></span><button>+</button></div>`, 10);

import { packd_export_1 } from 'https://srv.divriots.com/packd/solid-element,solid-js,solid-js/web';const { createSignal } = packd_export_1;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/solid-element,solid-js,solid-js/web';const { customElement } = packd_export_0;;
const style =
/*css*/
`div * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;
customElement("my-counter", () => {
  const [count, setCount] = createSignal(0);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling,
          _el$4 = _el$3.nextSibling,
          _el$5 = _el$4.nextSibling;

    _el$3.$$click = () => setCount(count() - 1);

    _$insert(_el$4, count);

    _el$5.$$click = () => setCount(count() + 1);

    return _el$;
  })();
});

_$delegateEvents(["click"]);