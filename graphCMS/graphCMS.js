import { GraphQLClient, request, gql } from 'graphql-request';

const endPoint = 'https://api-ap-south-1.graphcms.com/v2/cl1cftilp0ceg01wb0ncnht6i/master';

const graphcms = new GraphQLClient(endPoint);
export default graphcms;

export const getSingleProduct = async (id) => {
    const query = gql`  
    query getProductsDetails($id: ID) {
        products(where: {id: $id}) {
          description
        }
    }
    `
    const result = await request(endPoint, query, { id });
    return result.products;
}

// export const getSpecificVarietyProduct = async (id) => {
//     const query = gql`  
//     query getVarietiesDetails($id: ID) {
//         varieties(where: {id: $id}) {
//           products {
//             id
//             name
//             image {
//               id
//               url
//             }
//             price
//           }
//         }
//     }  
//     `
//     const result = await request(endPoint, query, { id });
//     return result.varieties;
// }
