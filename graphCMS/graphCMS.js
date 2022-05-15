import { GraphQLClient, request, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/cl1cftilp0ceg01wb0ncnht6i/master',
);
export default graphcms;

export const getSingleProduct = async (id) => {
    const query = gql`  
    query getProductsDetails($id: ID) {
        products(where: {id: $id}) {
          id
          name
          price
          description
          excerpt
          image {
            id
            url
          }
        }
    }
    `
    const result = await request('https://api-ap-south-1.graphcms.com/v2/cl1cftilp0ceg01wb0ncnht6i/master', query, { id });

    return result.products;
}
