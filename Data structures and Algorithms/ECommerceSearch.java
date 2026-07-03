public class ECommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        Product(int id, String name, String cat) {
            productId = id;
            productName = name;
            category = cat;
        }
    }

    static void linearSearch(Product[] p, int id) {
        boolean found = false;

        for (int i = 0; i < p.length; i++) {
            if (p[i].productId == id) {
                System.out.println("Product Found");
                System.out.println("ID: " + p[i].productId);
                System.out.println("Name: " + p[i].productName);
                System.out.println("Category: " + p[i].category);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Product Not Found");
        }
    }

    static void sortProducts(Product[] p) {
        for (int i = 0; i < p.length - 1; i++) {
            for (int j = 0; j < p.length - i - 1; j++) {
                if (p[j].productId > p[j + 1].productId) {
                    Product temp = p[j];
                    p[j] = p[j + 1];
                    p[j + 1] = temp;
                }
            }
        }
    }

    static void binarySearch(Product[] p, int id) {
        int low = 0;
        int high = p.length - 1;
        boolean found = false;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (p[mid].productId == id) {
                System.out.println("Product Found");
                System.out.println("ID: " + p[mid].productId);
                System.out.println("Name: " + p[mid].productName);
                System.out.println("Category: " + p[mid].category);
                found = true;
                break;
            } else if (id < p[mid].productId) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        if (!found) {
            System.out.println("Product Not Found");
        }
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(104, "Phone", "Electronics"),
            new Product(101, "Shoes", "Fashion"),
            new Product(105, "Bag", "Fashion"),
            new Product(102, "Watch", "Accessories"),
            new Product(103, "Laptop", "Electronics")
        };

        System.out.println("Linear Search");
        linearSearch(products, 103);

        sortProducts(products);

        System.out.println();
        System.out.println("Binary Search");
        binarySearch(products, 103);
    }
}
