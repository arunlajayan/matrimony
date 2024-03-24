import { CreateUSerDto } from '@/dto/create-user';
import { faker } from '@faker-js/faker';

describe('Product Api (e2e)', () => {
    it('Get Products', () => {
        cy.request('GET', '/api/products').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    const CreateUSerDto: CreateUSerDto = {
        username: faker.word.words(),
        email: faker.internet.email(),
        password: faker.internet.password(),
  
    };

    let productId: string | undefined = undefined;

    it('Post Products', () => {
        cy.request('POST', '/api/products', CreateUSerDto).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.product.id).to.be.ok;
            expect(response.body.product.username).to.eq(CreateUSerDto.username);
            expect(response.body.product.email).to.eq(CreateUSerDto.email);
            expect(response.body.product.price).to.eq(CreateUSerDto.password);

            productId = response.body.product.id;
        });
    });

    it('Get Product', () => {
        cy.request('GET', `/api/products/${productId}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.product.id).to.be.ok;
            expect(response.body.product.username).to.eq(CreateUSerDto.username);
            expect(response.body.product.email).to.eq(CreateUSerDto.email);
            expect(response.body.product.price).to.eq(CreateUSerDto.password);
        });
    });

    const newName = faker.word.noun();

    it('PUT Product', () => {
        cy.request('PUT', `/api/products/${productId}`, { name: newName }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.product.id).to.be.ok;
            expect(response.body.product.username).to.eq(newName);
            expect(response.body.product.email).to.eq(CreateUSerDto.email);
            expect(response.body.product.price).to.eq(CreateUSerDto.password);
        });
    });

    it('DELETE Product', () => {
        cy.request('DELETE', `/api/products/${productId}`).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('GET Product', () => {
        cy.request({ url: `/api/products/${productId}`, method: 'DELETE', failOnStatusCode: false }).then(
            (response) => {
                expect(response.status).to.eq(404);
            },
        );
    });
});