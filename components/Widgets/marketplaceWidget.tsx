import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import {
    Box,
    Grid,
    Heading,
    Text,
    Stack,
    Container,
    Button,
    Flex,
    Image,
    Input,
    Icon,
    useColorMode,
    Center,
    SimpleGrid,
    Select,
    Divider,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type Props = {};

export const MarketplaceWidget = (props: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/products.json');
            const products = await response.json();
            setProducts(products);
        }

        fetchProducts();
    }, []);

    const handleAddToCart = (product: Product) => {
        const existingCartItem = cartItems.find((item) => item.product.id === product.id);
        if (existingCartItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                ),
            );
        } else {
            setCartItems([...cartItems, { product: product, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (product: Product) => {
        const existingCartItem = cartItems.find((item) => item.product.id === product.id);
        if (existingCartItem) {
            if (existingCartItem.quantity === 1) {
                setCartItems(cartItems.filter((item) => item.product.id !== product.id));
            } else {
                setCartItems(
                    cartItems.map((item) =>
                        item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
                    ),
                );
            }
        }
    };

    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    const handleClearCart = () => {
        setCartItems([]);
    };
    return (
        <div >
            <Container>
            <Drawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} placement="right">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Cart</DrawerHeader>
                    <DrawerBody>
                        {cartItems.length === 0 ? (
                            <Text textAlign="center">Your cart is empty</Text>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <Flex key={item.product.id} alignItems="center" justifyContent="space-between">
                                        <Image src={item.product.image} alt={item.product.name} boxSize="50px" />
                                        <Text>{item.product.name}</Text>
                                        <Text>{item.quantity}</Text>
                                        <Text fontWeight="bold">${item.product.price * item.quantity}</Text>
                                        <Button
                                            variant="ghost"
                                            colorScheme="red"
                                            size="sm"
                                            onClick={() => handleRemoveFromCart(item.product)}
                                        >
                                            <Icon name="minus" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                        
                                            onClick={() => handleAddToCart(item.product)}
                                        >
                                            <Icon name="add" />
                                        </Button>
                                    </Flex>
                                ))}
                                <Divider my="2" />
                                <Flex alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="bold">Total:</Text>
                                    <Text fontWeight="bold">${total}</Text>
                                </Flex>
                                <Button onClick={handleClearCart} mt="4" w="full">
                                    Clear Cart
                                </Button>
                            </>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Box mt="16">
                <Container maxW="container.xl">
                    <Flex justifyContent="space-between" alignItems="center" mb="8">
                        <Select placeholder="Sort by">
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                            <option value="name-a-to-z">Name: A to Z</option>
                            <option value="name-z-to-a">Name: Z to A</option>
                        </Select>
                    </Flex>
                    <SimpleGrid columns={[1, 2, 3, 4]} spacing="8">
                        {products.map((product) => (
                            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                                <Image src={product.image} alt={product.name} />
                                <Box p="6">
                                    <Stack spacing="2">
                                        <Heading as="h3" size="md">
                                            {product.name}
                                        </Heading>
                                        <Text fontSize="xl" fontWeight="bold">
                                            ${product.price}
                                        </Text>
                                        <Text>{product.description}</Text>
                                    </Stack>
                                    <Button
                                        mt="4"
                                        w="full"
                                        onClick={() => handleAddToCart(product)}
                                        colorScheme="blue"
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
            <Footer />
            </Container>
        </div>
    )
}