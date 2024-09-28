import { termsQuery } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../..//sanity/lib/sanityFetch";
import TermsComponent from "../../components/TermsComponent";


export default async function TermsPage() {
  const termsData = await sanityFetch({ query: termsQuery });

    return (<TermsComponent termsData={termsData} />);       
}


