import { useRedirect, useRedirector } from "~/entries/contentScript";
import { REDIRECTS } from '~/ts';

const Redirector = () => {
    //useRedirector(REDIRECTS);
    useRedirect();

    return (
        <></>
    )
}

export default Redirector;

