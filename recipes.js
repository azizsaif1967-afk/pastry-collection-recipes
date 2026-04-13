const recipes = [
  {
    id: "masala-chai-cake",
    name: "Masala Chai Cake",
    description: "A spiced tea-flavored cake with chai frosting that transforms your favorite hot beverage into a delicious layered dessert.",
    category: "Cakes",
    prepTime: "45 min",
    cookTime: "30 min",
    totalTime: "75 min",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["400g all-purpose flour", "58g corn flour", "2 tsp baking powder", "1/4 tsp baking soda", "400g granulated white sugar", "1/2 tsp cinnamon powder", "345g unsalted butter, softened", "1/2 tsp cardamom powder", "3 whole eggs", "2 egg whites", "2 tsp vanilla essence", "360ml buttermilk", "200ml full-fat milk", "10g loose tea leaves", "25g sugar", "Whole spices (cardamom, clove, cinnamon, ginger)"],
      "Frosting": ["120ml liquid whipping cream", "130ml full-fat milk", "150ml water", "7g loose tea leaves", "10g sugar"]
    },
    instructions: ["Preheat oven to 170°C and prepare pans with butter and flour.", "Combine dry ingredients: flour, corn flour, baking powder, soda, salt, and spices.", "Cream softened butter and sugar until thick and pale, about 5-7 minutes.", "Add eggs, egg whites, and vanilla; whisk for 2-3 minutes.", "Gradually fold in dry ingredients on low speed.", "Add buttermilk and mix until smooth.", "Bake 20-30 minutes until a toothpick comes out clean; cool completely.", "For frosting: simmer milk, tea leaves, sugar, and whole spices for 10-15 minutes; strain and cool.", "Whip cream to soft peaks, then add cooled chai mixture; whip to stiff peaks.", "For topping syrup: simmer milk, water, tea leaves, and sugar 10-15 minutes; strain and cool.", "Poke holes in cooled cake layers with a fork, pour chai syrup until absorbed.", "Pipe chai cream on top and sprinkle with cinnamon powder."],
    tips: ["Use strong loose tea leaves for best flavor.", "Allow the chai to cool completely before adding to cream."]
  },
  {
    id: "chocolate-chip-cookies",
    name: "Bakery Style Chunky Chocolate Chip Cookies",
    description: "The perfect bakery-style chunky chocolate chip cookies with a dash of sea salt for that irresistible sweet-salty combination.",
    category: "Cookies",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "12-48 hrs (includes chilling)",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["380g all-purpose flour", "1 tsp baking soda", "1 tsp baking powder", "1/2 tsp salt", "227g unsalted butter, room temperature", "50g white granulated sugar", "247g packed brown sugar", "2 eggs, room temperature", "1 tsp vanilla essence", "340g chocolate chips", "1 tsp sea salt for topping"]
    },
    instructions: ["Mix dry ingredients: flour, baking soda, baking powder, and salt; set aside.", "Cream butter with both sugars on high speed for 2 minutes until light and fluffy.", "Add room-temperature eggs and vanilla; whisk until fully incorporated.", "Fold dry ingredients into wet mixture on low speed until combined.", "Add chocolate chips; mix briefly.", "Divide dough in half, wrap in cling film, and refrigerate 12-48 hours.", "Preheat oven to 180°C; line baking pan with parchment paper.", "Scoop dough balls onto prepared pan with adequate spacing.", "Bake 12-14 minutes until edges brown but center remains soft.", "Sprinkle sea salt on cooled cookies."],
    tips: ["Chilling dough 12-48 hours creates chewier, thicker cookies.", "Remove dough from fridge 30 minutes before baking.", "Don't overmix butter and sugar mixture."]
  },
  {
    id: "kunafa-cheesecake",
    name: "Kunafa Cheesecake",
    description: "A Middle-Eastern twist on the classic baked New York cheesecake featuring all the beloved flavors of kunafa with a crispy kataifi base.",
    category: "Cheesecakes",
    prepTime: "60 min",
    cookTime: "90 min",
    totalTime: "8.5 hrs",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=600&h=400&fit=crop",
    ingredients: {
      "Cheesecake Layer": ["810g cream cheese", "220g granulated sugar", "115g sour cream", "1 tsp lemon juice", "1 tsp vanilla extract", "4 eggs"],
      "Sugar Syrup": ["200g granulated white sugar", "200ml water"],
      "Kataifi Base": ["200g kataifi dough, defrosted", "85g unsalted butter, melted"],
      "Topping": ["200g keshta cream"]
    },
    instructions: ["Preheat oven to 160°C. Grease springform pan with butter and line with parchment paper.", "Beat cream cheese on medium speed until soft and smooth.", "Add sugar and beat 2-3 minutes until well combined with no graininess.", "Add sour cream, lemon juice, and vanilla extract; mix thoroughly.", "Add beaten eggs and mix until smooth with no lumps.", "Transfer batter to prepared pan and wrap sides with aluminum foil.", "Bake in water bath for 50-60 minutes until sides are firm and center is set but soft.", "Cool, then freeze 3-6 hours until completely set.", "For syrup: combine sugar and water, bring to boil, simmer on low 10 minutes until thick. Cool before using.", "For kataifi base: mix defrosted dough with melted butter. Reserve some for topping and roast until golden.", "Press remaining dough into springform pan. Bake 15-20 minutes until golden-brown.", "Pour generous sugar syrup over hot base; chill 1-2 hours.", "Assemble: place kataifi base, add frozen cheesecake layer, refrigerate 3-6 hours.", "Top with keshta cream, roasted kataifi, and drizzle syrup before serving."],
    tips: ["Serve with extra sugar syrup on the side.", "The water bath prevents the cheesecake from cracking."]
  },
  {
    id: "molten-lava-cake",
    name: "Chocolate Molten Lava Cake",
    description: "A rich, decadent chocolate cake with a perfectly gooey molten center that flows when you break into it.",
    category: "Cakes",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop",
    ingredients: {
      "Lava Cake": ["85g chocolate", "58g unsalted butter", "15g all-purpose flour", "30g icing sugar", "Pinch of salt", "1 egg", "1 egg yolk"]
    },
    instructions: ["Preheat oven to 210-215°C.", "Grease ramekins with butter and dust with cocoa powder to prevent sticking.", "Melt chocolate and butter together in 20-second microwave increments, stirring between each; let cool.", "Whisk melted mixture until butter is well incorporated.", "Combine flour, icing sugar, and salt in a separate bowl.", "Whisk egg and egg yolk together in another bowl.", "Gently fold dry ingredients and egg mixture into cooled chocolate mixture; avoid overmixing.", "Fill prepared ramekins three-quarters full.", "Bake 10-12 minutes until sides set but center jiggles slightly.", "Invert onto plates and serve immediately with ice cream."],
    tips: ["The key is timing - sides should be set but center should jiggle.", "Serve immediately for the best molten effect."]
  },
  {
    id: "homemade-churros",
    name: "Homemade Churros",
    description: "Crispy on the outside, soft on the inside - these homemade churros coated in cinnamon sugar are the perfect treat.",
    category: "Pastries",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "45 min",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1624371414361-e670246ae8ec?w=600&h=400&fit=crop",
    ingredients: {
      "Churros": ["120g butter", "90ml water", "12ml full-fat milk", "20g caster sugar", "1/4 tsp salt", "85g all-purpose flour", "2 eggs", "Neutral oil for frying", "Cinnamon sugar for coating"]
    },
    instructions: ["Heat butter, water, milk, sugar, and salt in a saucepan until boiling over medium heat.", "Stir flour into the boiling mixture, continuing for 5-8 minutes until dough releases from pan sides.", "Transfer dough to stand mixer. Mix on high speed 3-5 minutes until steam stops rising.", "Add eggs one at a time on medium speed, mixing until fully incorporated.", "Transfer dough to piping bag with a star tip. Pipe straight lines onto parchment-lined tray.", "Freeze 15-20 minutes until set.", "Heat oil in deep pan. Fry churros on medium heat until golden brown.", "Coat hot churros in cinnamon sugar and serve immediately with dipping sauce."],
    tips: ["Freezing before frying helps them keep their shape.", "Keep oil at a moderate temperature for even cooking."]
  },
  {
    id: "baklava-cake",
    name: "Baklava Cake",
    description: "A fusion dessert that combines the flavors of traditional baklava with a moist, spiced cake topped with crispy filo pastry layers.",
    category: "Cakes",
    prepTime: "45 min",
    cookTime: "45 min",
    totalTime: "2.5 hrs",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["250g all-purpose flour", "65g granulated white sugar", "65g brown sugar", "10g baking powder", "1 tsp cinnamon powder", "15g chopped pistachios", "15g chopped walnuts", "1/4 tsp salt", "250ml full-fat milk", "1 large egg", "1 tsp vanilla essence", "75g butter, melted"],
      "Baklava Topping": ["3 filo pastry sheets, defrosted", "200g butter, melted", "50g pistachios", "50g walnuts", "1 tsp cinnamon powder", "500ml water", "350g granulated white sugar"]
    },
    instructions: ["Preheat oven to 160°C. Grease and flour a 7-inch springform pan.", "Combine dry ingredients and nuts; whisk together.", "Add milk, egg, and vanilla; whisk until combined.", "Drizzle melted butter while whisking until incorporated.", "Transfer batter to pan; chill 10 minutes.", "Cut filo sheets into circles matching pan size.", "Blend pistachios, walnuts, and cinnamon until roughly chopped.", "Layer filo with butter and nut filling alternately; finish with buttered filo.", "Bake 40-45 minutes until cooked; broil until golden.", "Make syrup: boil water and sugar, simmer 10 minutes until thickened.", "Pour 3-4 tablespoons syrup over hot cake; cool completely."],
    tips: ["Broil the top for 3-5 minutes before serving to crisp the filo.", "Serve with extra syrup on the side."]
  },
  {
    id: "homemade-cinnamon-rolls",
    name: "Fluffy Homemade Cinnamon Rolls",
    description: "Soft, fluffy cinnamon rolls filled with brown sugar and cinnamon, topped with a luscious cream cheese glaze.",
    category: "Pastries",
    prepTime: "60 min",
    cookTime: "20 min",
    totalTime: "4 hrs 20 min",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1609126979532-3f0d76935d38?w=600&h=400&fit=crop",
    ingredients: {
      "Dough": ["92g granulated white sugar", "78g unsalted butter, softened", "7g salt", "1 large egg", "454g all-purpose flour", "6g instant yeast", "255g full-fat milk, lukewarm"],
      "Filling": ["100g packed brown sugar", "20g cinnamon powder", "30g unsalted butter, softened"],
      "Cream Cheese Glaze": ["120g cream cheese", "55g unsalted butter, softened", "120g powdered sugar", "2 tsp vanilla essence"]
    },
    instructions: ["Cream butter, sugar, and salt for 3-5 minutes; add egg and mix 1-2 minutes.", "Add flour, lukewarm milk, and yeast; mix until dough comes together.", "Knead until smooth and soft, approximately 20 minutes by hand.", "Perform windowpane test to confirm proper gluten development.", "Oil bowl, place dough inside, cover and let rise 1.5-2 hours until doubled.", "Punch down, roll into a 14x18 inch rectangle.", "Spread butter, sprinkle cinnamon-sugar mixture evenly.", "Roll tightly horizontally; slice with dental floss into 12 pieces.", "Place in baking pan with spacing; cover and proof 1.5-2 hours.", "Bake at 160-170°C for 15-20 minutes until light blonde.", "Prepare glaze by whipping cream cheese and butter, then add powdered sugar and vanilla.", "Apply glaze 10 minutes after removing from oven; cool 10 minutes before serving."],
    tips: ["Use dental floss to cut clean slices.", "The dough should pass the windowpane test for best texture."]
  },
  {
    id: "red-velvet-molten-lava-cake",
    name: "Red Velvet Molten Lava Cake",
    description: "A stunning red velvet version of the classic molten lava cake with a cream cheese glaze drizzle.",
    category: "Cakes",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=400&fit=crop",
    ingredients: {
      "Lava Cake": ["85g chocolate chips", "58g unsalted butter", "12g icing sugar", "Pinch of salt", "1 egg", "1 egg yolk"],
      "Cream Cheese Glaze": ["30g cream cheese", "10g icing sugar", "20ml milk"]
    },
    instructions: ["Preheat oven to 200°C. Grease and dust ramekins with butter and flour.", "Melt chocolate and butter together using a double boiler or microwave in 20-second increments.", "Whisk the chocolate mixture until butter is fully incorporated.", "Combine flour, icing sugar, and salt separately. Whisk egg and egg yolk in another bowl.", "Add dry ingredients and egg mixture to cooled chocolate mixture; whisk until combined.", "Pour batter into prepared ramekins halfway full.", "Bake 12-13 minutes until sides are set but center remains jiggly.", "Make glaze by whisking cream cheese, icing sugar, and milk together.", "Invert cakes onto plates and drizzle with cream cheese glaze. Serve immediately."],
    tips: ["Watch the timing carefully - even 1 minute too long will set the center.", "The cream cheese glaze adds the signature red velvet flavor profile."]
  },
  {
    id: "masala-chai-tiramisu",
    name: "Masala Chai Tiramisu",
    description: "A desi-inspired tiramisu that swaps espresso for fragrant masala chai, layered with spiced mascarpone cream and pistachios.",
    category: "Desserts",
    prepTime: "30 min",
    cookTime: "0 min",
    totalTime: "4.5 hrs",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
    ingredients: {
      "Chai": ["260ml full-fat milk", "260ml water", "14g loose black tea", "14g sugar", "Whole spices (cinnamon, cardamom)", "200g ladyfingers"],
      "Mascarpone Cream": ["2 eggs, separated", "100g white granulated sugar, divided", "250g mascarpone cheese", "1 tsp vanilla essence", "1/2 tsp salt", "1/4 tsp cinnamon powder", "1/4 tsp cardamom powder", "100ml whipped cream", "Chopped pistachios for topping"]
    },
    instructions: ["Prepare chai by combining milk, water, tea, sugar, and spices. Simmer 5-10 minutes. Cool completely.", "Dip ladyfinger biscuits in cooled chai for 5-6 seconds; arrange as bottom layer in serving dish.", "Whip egg yolks with half the sugar until pale and glossy, 5-8 minutes.", "Fold in mascarpone, vanilla, salt, and spices until combined.", "Whip egg whites with remaining sugar to stiff peaks in separate bowl.", "Gently fold egg whites into mascarpone mixture in three increments.", "Layer: chai-soaked ladyfingers, half mascarpone cream, ladyfingers, remaining cream, whipped cream, pistachios.", "Refrigerate 4-5 hours or overnight before serving."],
    tips: ["The longer it chills, the better the flavors meld.", "Don't over-soak the ladyfingers or they'll become mushy."]
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake with Brown Sugar Cream Cheese Frosting",
    description: "A perfectly spiced, moist carrot cake topped with a rich brown sugar cream cheese frosting.",
    category: "Cakes",
    prepTime: "40 min",
    cookTime: "30 min",
    totalTime: "70 min",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["160g all-purpose flour", "2 tsp baking powder", "1 tsp cinnamon powder", "1/2 tsp nutmeg powder", "1/2 tsp salt", "190ml vegetable oil", "80ml full-fat milk", "1 tsp vanilla extract", "3 eggs", "160g brown sugar", "90g grated carrots"],
      "Frosting": ["75g unsalted butter, softened", "50g packed brown sugar", "150g cream cheese"]
    },
    instructions: ["Preheat oven to 180°C. Grease baking pan with butter and flour.", "Grate carrots and squeeze out all water. Measure after squeezing.", "Combine dry ingredients: flour, baking powder, cinnamon, nutmeg, and salt.", "Whisk wet ingredients: oil, milk, and vanilla extract.", "Beat eggs with mixer for 3-5 minutes until pale and fluffy.", "Add brown sugar to eggs, beat 3-5 minutes until incorporated.", "Gradually pour wet mixture into egg mixture on low speed.", "Fold in dry ingredients in 3 parts using a spatula.", "Fold in grated carrots until no lumps remain.", "Bake 30-40 minutes until toothpick comes clean.", "For frosting: beat softened butter until pale, add brown sugar and beat 3-5 minutes, add cream cheese and mix.", "Top cooled cake layers with frosting."],
    tips: ["Squeeze out all water from grated carrots for the best texture.", "Don't overmix the cream cheese frosting or it will become runny."]
  },
  {
    id: "baklava-mille-feuille",
    name: "Chocolate & Pistachio Baklava Mille-Feuille",
    description: "An impressive layered dessert combining flaky baklava with rich chocolate pastry cream and pistachios.",
    category: "Pastries",
    prepTime: "60 min",
    cookTime: "30 min",
    totalTime: "5 hrs",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Pastry Cream": ["1 litre full-fat milk", "2 tsp vanilla essence", "200g egg yolks", "240g caster sugar", "100g cornstarch", "50g unsalted butter"],
      "Baklava Layers": ["200g dark chocolate", "100g pistachios", "56 sheets filo pastry", "100g unsalted butter, melted"],
      "Sugar Syrup": ["300g sugar", "200g water"]
    },
    instructions: ["Heat milk with vanilla. Whisk egg yolks with sugar and cornstarch.", "Temper eggs by slowly adding hot milk while whisking.", "Cook combined mixture over heat until thickened. Add cold butter.", "Cool pastry cream in fridge 2-3 hours.", "Grind chocolate and pistachios together.", "Layer 7 filo sheets with melted butter, add nut filling, repeat.", "Bake 12-15 minutes until golden.", "Make syrup: boil sugar and water, simmer 10-15 minutes.", "Drizzle hot sugar syrup over baklava layers immediately.", "Pipe cooled pastry cream between baklava layers.", "Top with decorative cream and pistachios."],
    tips: ["Work quickly with filo pastry to prevent it from drying out.", "The syrup should be hot when poured over the baklava."]
  },
  {
    id: "smores-brownie",
    name: "S'mores Brownie",
    description: "Fudgy brownies loaded with marshmallows, graham crackers, and extra chocolate chips for the ultimate campfire-inspired treat.",
    category: "Brownies",
    prepTime: "22 min",
    cookTime: "30 min",
    totalTime: "52 min",
    servings: 9,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&h=400&fit=crop",
    ingredients: {
      "Brownie": ["113g chocolate chips", "175g unsalted butter", "400g granulated sugar", "3 eggs", "1 tsp vanilla extract", "125g all-purpose flour", "85g cocoa powder", "1/2 tsp salt", "60g chocolate chips", "50g marshmallows, divided", "50g graham crackers or digestive biscuits, divided"]
    },
    instructions: ["Preheat oven to 180°C.", "Line pan with baking paper, leaving overhang on sides.", "Melt chocolate with butter until combined.", "Add sugar to melted chocolate and whisk while hot.", "Incorporate eggs and vanilla extract.", "Fold in cocoa powder, flour, salt, chocolate chips, and half the marshmallows and biscuits.", "Transfer batter to prepared pan and spread evenly.", "Top with remaining marshmallows and biscuits.", "Bake 30-40 minutes until cooked but fudgy.", "Cool completely before slicing."],
    tips: ["The brownies should still be slightly fudgy in the center.", "Let them cool completely for cleaner slices."]
  },
  {
    id: "kulfi-tart",
    name: "Pistachio Kulfi Tart",
    description: "A frozen fusion dessert combining a pistachio shortcrust tart shell with a creamy, cardamom-spiced kulfi filling.",
    category: "Tarts",
    prepTime: "30 min",
    cookTime: "45 min",
    totalTime: "7 hrs",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
    ingredients: {
      "Pistachio Tart Base": ["100g ground pistachios", "165g all-purpose flour", "40g icing sugar", "1/2 tsp salt", "113g cold unsalted butter", "20-30ml cold water"],
      "Kulfi Filling": ["500ml full-fat milk", "60g sugar", "240ml full-fat milk", "12g cornstarch", "15g ground pistachios", "1/4 tsp cardamom powder", "Pinch of saffron", "White chocolate and pistachios for decoration"]
    },
    instructions: ["Mix ground pistachios, flour, icing sugar, and salt. Cut in cold butter until breadcrumb texture.", "Gradually add water until dough holds together. Wrap and refrigerate 30+ minutes.", "Roll dough between parchment paper; shape in tart ring. Bake at 180°C for 15-25 minutes. Cool.", "Heat 500ml milk with sugar, simmer 10 minutes, stirring constantly.", "Mix cornstarch with remaining milk; add to simmering mixture.", "Add ground pistachios, saffron, cardamom, and cream. Cook until custard-like, 15-20 minutes.", "Cool filling, then pour into tart base. Freeze 4-6 hours until set.", "Top with white chocolate layer and pistachios. Serve chilled."],
    tips: ["Keep butter ice cold for the flakiest pastry.", "The kulfi filling thickens as it cools."]
  },
  {
    id: "mango-ice-cream",
    name: "3-Ingredient No-Churn Mango Ice Cream",
    description: "A creamy, luscious mango ice cream made with just 3 ingredients and no ice cream machine needed.",
    category: "Ice Cream",
    prepTime: "30 min",
    cookTime: "0 min",
    totalTime: "8.5 hrs",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
    ingredients: {
      "Ice Cream": ["200ml liquid whipping cream / heavy cream", "160ml condensed milk", "120g fresh mango pulp (blended mango)", "50g mango chunks", "20g extra mango pulp for topping"]
    },
    instructions: ["Whip the cream in a large bowl until nearly stiff peaks form; avoid overmixing.", "Add condensed milk and fresh mango pulp, then whip until fully combined and stable.", "Fold in mango chunks using a silicone spatula.", "Transfer to a bowl, top with remaining mango puree, and swirl with a spatula.", "Freeze for at least 8 hours or overnight.", "Serve plain or with desired toppings."],
    tips: ["Use ripe, sweet mangoes for the best flavor.", "Don't over-whip the cream or it will become grainy."]
  },
  {
    id: "butterbeer",
    name: "Butterbeer",
    description: "A magical non-alcoholic butterscotch drink inspired by the wizarding world, topped with whipped cream.",
    category: "Drinks",
    prepTime: "10 min",
    cookTime: "5 min",
    totalTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop",
    ingredients: {
      "Butterscotch Sauce": ["75g unsalted butter", "132g packed brown sugar", "95ml liquid whipping cream / heavy cream"],
      "Butterbeer": ["80g butterscotch sauce", "250g vanilla ice cream", "330ml cream soda", "Sweetened whipped cream for topping"]
    },
    instructions: ["Make butterscotch sauce: combine butter, brown sugar, and cream in a saucepan.", "Cook over medium-high heat while stirring until butter melts.", "Once boiling, reduce heat and simmer 2-3 minutes until thickened. Cool slightly.", "Blend ice cream, butterscotch sauce, and cream soda until well combined.", "Pour into a tall glass, top with whipped cream and additional butterscotch sauce."],
    tips: ["Use cold cream soda for a frothier texture.", "The butterscotch sauce can be made ahead and refrigerated."]
  },
  {
    id: "creme-brulee-french-toast",
    name: "Creme Brulee French Toast",
    description: "Thick brioche slices stuffed with vanilla custard, pan-fried to golden perfection, and topped with a caramelized sugar crust.",
    category: "French Toast",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "1.5 hrs",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
    ingredients: {
      "Custard": ["30g egg yolks (about 2)", "36g caster sugar", "15g cornflour", "150ml full-fat milk", "1 tsp vanilla essence", "15g unsalted butter"],
      "French Toast": ["2 eggs", "100ml full-fat milk", "50g granulated white sugar", "1 tsp vanilla essence", "1 tsp cinnamon", "1/4 tsp salt", "2 thick brioche slices", "2 tbsp ghee or butter", "30g granulated white sugar for brulee topping"]
    },
    instructions: ["Heat milk and vanilla until boiling; whisk egg yolks, caster sugar, and cornflour until pale.", "Temper eggs by slowly adding half the hot milk while whisking continuously.", "Transfer back to saucepan; whisk until thickened, about 2 minutes. Add butter. Chill for at least 1 hour.", "Mix eggs, milk, sugar, vanilla, cinnamon, and salt for French toast batter.", "Cut a pocket into brioche slices from the bottom without cutting through edges.", "Fill pockets with cooled custard using a piping bag.", "Dip filled brioche in egg mixture for 30-40 seconds per side.", "Cook in buttered pan for 2-3 minutes per side until golden.", "Top with sugar and torch until caramelized. Serve with fresh berries."],
    tips: ["The custard must be completely chilled before filling.", "Use a kitchen torch for the best caramelized crust."]
  },
  {
    id: "honey-butter-toast",
    name: "Honey Butter Toast with Condensed Milk",
    description: "Thick brioche toast slathered with honey butter and filled with sweet condensed milk - a Korean-inspired cafe treat.",
    category: "French Toast",
    prepTime: "20 min",
    cookTime: "10 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop",
    ingredients: {
      "Toast": ["40g unsalted butter, room temperature", "40g brown sugar", "20g honey", "1/2 tsp sea salt", "2 slices thick brioche bread", "100g condensed milk", "Strawberries for topping"]
    },
    instructions: ["Whisk butter and brown sugar together for 3-5 minutes until creamed, then add honey and sea salt.", "Trim bread edges and create a horizontal pocket in the center without cutting through.", "Pipe condensed milk into the bread pocket using a piping bag or ziplock bag.", "Spread honey butter mixture over the filled bread, coating all sides.", "Cook in a preheated pan on medium heat for 2-3 minutes per side until golden brown.", "Top with additional condensed milk and strawberries before serving."],
    tips: ["Use thick-cut brioche for the best pockets.", "Serve immediately while warm and crispy."]
  },
  {
    id: "hot-chocolate-cookies",
    name: "Hot Chocolate Cookies",
    description: "Rich, fudgy chocolate cookies topped with a piece of chocolate and a toasted marshmallow - like hot chocolate in cookie form.",
    category: "Cookies",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "2.5 hrs",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    ingredients: {
      "Cookies": ["340g chocolate chips (milk and dark mix)", "225g unsalted butter", "250g packed brown sugar", "3 eggs", "1 tsp vanilla essence", "180g all-purpose flour", "1 tsp baking powder", "1 tsp baking soda", "10g corn flour", "1/2 tsp salt", "12 pieces 70% chocolate for topping", "12 marshmallows for topping"]
    },
    instructions: ["Melt chocolate and butter in microwave using 30-second increments.", "Mix flour, baking powder, baking soda, corn flour, and salt separately.", "Beat brown sugar, eggs, and vanilla for 2-4 minutes until light and fluffy.", "Combine cooled chocolate mixture with egg mixture, then add dry ingredients.", "Mix 3-5 minutes until thick batter forms.", "Wrap dough in cling film and chill for at least 2 hours.", "Preheat oven to 170°C. Shape into equal-sized balls on parchment paper.", "Bake 10 minutes until spread, then top each with chocolate and marshmallow.", "Bake 2-3 minutes more until marshmallow is toasted."],
    tips: ["The dough must be thoroughly chilled for the right texture.", "Add the marshmallow near the end so it toasts but doesn't melt away."]
  },
  {
    id: "kinder-cake",
    name: "Kinder Cake with Kinder Ganache",
    description: "A rich chocolate cake layered with crushed Kinder Bueno filling and topped with a dramatic Kinder chocolate ganache.",
    category: "Cakes",
    prepTime: "40 min",
    cookTime: "20 min",
    totalTime: "60 min",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["125ml full-fat milk", "1 tbsp vinegar", "120g all-purpose flour", "100g white granulated sugar", "100g brown sugar", "38g cocoa powder", "1 tsp baking powder", "3/4 tsp baking soda", "1/2 tsp salt", "1/2 tsp coffee powder", "60ml neutral oil", "1 egg", "1 tsp vanilla essence", "125ml boiling water"],
      "Kinder Ganache": ["250g Kinder Maxi chocolate bars, chopped", "250ml heavy cream"],
      "Filling": ["200ml whipped cream", "12 Kinder Bueno Bars, crushed"]
    },
    instructions: ["Preheat oven to 180°C. Grease cake pans with butter and flour.", "Make buttermilk by adding vinegar to milk; let sit 10 minutes. Add oil, egg, and vanilla.", "Combine dry ingredients in separate bowl.", "Mix wet and dry ingredients on medium speed.", "On low speed, pour boiling water into batter carefully until incorporated.", "Bake 20 minutes until toothpick comes out clean.", "Make ganache: pour hot cream over chopped chocolate; let sit 2 minutes, then whisk smooth.", "Whip cream to medium peaks; fold in crushed Kinder Bueno bars.", "Layer cooled cake with Kinder Bueno filling between layers.", "Pour warm ganache over the top for a dramatic finish."],
    tips: ["The boiling water makes the cake extra moist.", "Let the ganache cool slightly before pouring for a thicker coating."]
  },
  {
    id: "creme-brulee-oat-cookies",
    name: "Creme Brulee Oat Cookies",
    description: "These delicious cookies are the perfect match between two classic desserts - a chewy, chunky oat cookie topped with silky smooth custard and a crunchy, crisp, sugar brulee topping.",
    category: "Cookies",
    prepTime: "40 minutes",
    cookTime: "20 minutes",
    totalTime: "180 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Oat Cookies": ["115g unsalted butter, softened", "100g brown sugar", "25g white sugar", "1 egg", "1/2 tsp vanilla essence", "90g all-purpose flour", "1/2 tsp baking powder", "1/2 tsp baking soda", "1 tsp cinnamon powder", "1/2 tsp salt", "125g rolled oats"],
      "Custard/Pastry Cream": ["50g egg yolks", "60g caster sugar", "25g cornflour/cornstarch", "250ml full-fat milk", "1 tsp vanilla essence or vanilla pod", "25g unsalted butter"]
    },
    instructions: ["Cream softened butter with sugars until light and fluffy (3-5 minutes at high speed).", "Mix in egg and vanilla at medium speed until combined.", "Add dry ingredients and whisk for 2-3 minutes into thick dough.", "Fold in oats, then chill dough 30-45 minutes.", "Bake at 170°C for 12 minutes until sides set but center soft; cool before topping.", "Boil milk with vanilla while whisking yolks, sugar, and cornflour separately until pale.", "Temper eggs by slowly adding half the hot milk while whisking continuously.", "Transfer mixture back to pan, whisk 2 minutes until thickened; add butter.", "Top cooled cookies with custard layer, sprinkle sugar, torch until caramelized; serve immediately."],
    tips: ["Chill the dough for 30-45 minutes for best results.", "Serve immediately after torching the sugar topping for the best crunch."]
  },
  {
    id: "dalgona-coffee-milk-cake",
    name: "Dalgona Coffee Milk Cake",
    description: "A delicious and easy coffee three milk cake with a quick and easy 3-ingredient sponge that will impress everybody!",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "170 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Dalgona Three-Milk Mixture": ["120g granulated sugar", "18g coffee powder", "45ml full-fat milk", "100ml liquid whipping cream", "175g condensed milk", "65ml evaporated milk"],
      "Cake Sponge": ["4 eggs, separated", "75g sugar, divided in half", "80g all-purpose flour"],
      "Topping": ["120ml whipped cream", "Dalgona mixture, reserved"]
    },
    instructions: ["Whip coffee powder, sugar, and milk until fluffy (~5 min).", "Dissolve half the dalgona mixture into warm whipping cream.", "Add condensed and evaporated milk; set aside.", "Preheat oven to 180°C; prepare pan.", "Separate eggs; whisk yolks and whites with sugar separately.", "Fold egg whites and flour alternately into yolk mixture.", "Bake 15-20 minutes until golden.", "Pierce cake with fork; pour milk mixture while hot.", "Chill minimum 2 hours.", "Whip remaining dalgona mixture into cream.", "Layer cake with whipped cream and milk mixture."],
    tips: ["Chill the cake for a minimum of 2 hours for best milk absorption.", "Reserve some dalgona mixture for the topping."]
  },
  {
    id: "apple-pie-sandwich",
    name: "Apple Pie Sandwich",
    description: "When you want to have apple pie for breakfast, try this quick and easy recipe made with simple ingredients!",
    category: "Pastries",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    totalTime: "20 minutes",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Apple Pie Sandwich": ["4 slices white sandwich bread or brioche bread", "60g unsalted butter, melted", "4 tbsp cinnamon sugar", "200g apples, peeled and chopped into 1/4-inch pieces", "60g brown sugar", "15g all-purpose flour", "1 tsp cinnamon powder"]
    },
    instructions: ["Spread melted butter evenly on one side of each bread slice. Sprinkle cinnamon sugar on the buttered side, ensuring complete coverage.", "Combine chopped apple, brown sugar, flour, and cinnamon in a bowl. Cook the mixture in a pan over medium heat until apples soften and break down.", "Place half the apple filling on one slice, top with the other slice, then toast in a non-stick pan on low heat until both sides turn golden and crispy. Serve immediately while hot."],
    tips: ["Use brioche bread for a richer flavor.", "Serve immediately while hot for the best texture."]
  },
  {
    id: "cinnamon-coffee-cake",
    name: "Cinnamon Coffee Cake",
    description: "This delicious and super moist coffee cake with a cinnamon filling and cinnamon crumb is the perfect way to spice up your tea and coffee.",
    category: "Cakes",
    prepTime: "45 minutes",
    cookTime: "45 minutes",
    totalTime: "90 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Cinnamon Filling": ["120g packed brown sugar", "25g all-purpose flour", "2 tsp cinnamon powder"],
      "Cinnamon Streusel Crumb": ["120g packed brown sugar", "110g all-purpose flour", "2 tsp cinnamon powder", "1/2 tsp salt", "100g unsalted butter, cold"],
      "Cake Batter": ["270g all-purpose flour", "30g cornstarch", "2.5 tsp baking powder", "3/4 tsp salt", "170g unsalted butter, softened", "150g packed brown sugar", "150g white sugar", "3 eggs", "2 tsp vanilla extract", "240g full-fat yogurt, whisked", "Icing sugar", "Full-fat milk (for glaze)"]
    },
    instructions: ["Mix filling ingredients together until well combined; set aside.", "Combine dry streusel ingredients; cut cold butter into cubes and add to mixture.", "Rub with hands or fork until wet sand consistency (avoid overworking).", "Preheat oven to 170°C; line baking pan with parchment paper, leaving overhang.", "Whisk together flour, cornstarch, baking powder, and salt.", "Beat softened butter and both sugars for 3-5 minutes until pale and creamy.", "Add eggs one at a time, whisking 30 seconds after each addition.", "Add vanilla extract and whisk 30 seconds until combined.", "Add yogurt and whisk 1-2 minutes on medium speed.", "Fold in dry ingredients slowly using spatula until just combined.", "Pour half batter into pan, add cinnamon filling layer, top with remaining batter.", "Sprinkle cinnamon streusel crumb topping.", "Bake 45-60 minutes until golden brown and toothpick comes out clean.", "Cool completely, then top with icing sugar and milk glaze before serving."],
    tips: ["Avoid overworking the streusel to maintain its crumbly texture.", "Cool the cake completely before adding the glaze."]
  },
  {
    id: "red-velvet-cookies-with-cream-cheese",
    name: "Red Velvet Cookies with Cream Cheese",
    description: "Turn your favorite red velvet cake slice into a chewy, delicious cookie filled with cream cheese frosting.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    totalTime: "345 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["185g all-purpose flour", "30g cocoa powder", "1/2 tsp baking powder", "1/2 tsp baking soda", "1 tsp cornstarch/corn flour", "1/4 tsp salt", "115g unsalted butter, softened", "100g brown sugar", "100g white sugar", "1 egg, room temperature", "2 tsp vanilla essence", "15ml full-fat milk", "1 tbsp liquid or gel red food coloring"],
      "Cream Cheese Filling": ["100g full-fat cream cheese", "190g icing sugar", "10g all-purpose flour", "1/2 tsp vanilla essence", "Extra white sugar for topping"]
    },
    instructions: ["Combine dry ingredients: flour, cocoa powder, baking powder, baking soda, cornstarch, and salt.", "Cream softened butter with both sugars on high speed for 3-5 minutes until well combined.", "Add room temperature egg and vanilla essence; whisk until fully incorporated.", "On low speed, add dry ingredients to batter until fully incorporated.", "Add milk and red food coloring; whisk until completely incorporated.", "Wrap dough tightly and chill in refrigerator for 8 hours or overnight.", "Prepare cream cheese filling by whisking all ingredients for 3-5 minutes; freeze dollops for 1-2 hours, shape into balls, freeze 10-15 minutes more.", "Form chilled dough balls, create dents in half, flatten remaining halves, assemble with cream cheese centers, chill 10-15 minutes.", "Roll assembled cookies in granulated white sugar.", "Bake at 170°C for 10-15 minutes until edges set but center soft; shape while warm using circular object."],
    tips: ["Chill the dough overnight for the best texture.", "Use room temperature eggs for better incorporation.", "Shape the cookies while still warm using a circular object for perfectly round edges."]
  },
  {
    id: "easy-4-ingredient-chocolate-mousse-eggless",
    name: "Easy 4-Ingredient Chocolate Mousse (Eggless)",
    description: "A delicious no-bake dessert made with chocolate, milk, cream, and gelatin. Flavor it with any chocolate you like!",
    category: "Desserts",
    prepTime: "30 minutes",
    cookTime: "0 minutes",
    totalTime: "210 minutes",
    servings: 5,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Chocolate Mousse": ["160g chocolate (dark, semi-sweet, milk, or white)", "150g full-fat milk", "4g gelatin powder", "30ml water, ice-cold (for blooming gelatin)", "225ml liquid whipping cream", "Extra whipped cream (optional, for topping)"]
    },
    instructions: ["Bloom the gelatin: Add ice-cold water to a bowl, sprinkle gelatin powder over it, mix immediately. Chill in fridge for 15 minutes until completely set.", "Melt chocolate: Place chocolate in heat-proof bowl. Heat milk and pour over chocolate. Let sit one minute, then whisk until fully combined.", "While mixture is hot, add bloomed gelatin and whisk until melted and mixed. Cool to room temperature.", "Whip liquid cream to medium stiff peaks. Gradually pour chocolate mixture into cream while slowly folding with spatula to maintain airiness.", "Pour mousse into cups or serving dish. Refrigerate 2-3 hours. Top with garnishes and serve."],
    tips: ["Use ice-cold water for blooming gelatin.", "Cool the chocolate mixture to room temperature before folding into cream to maintain airiness.", "Flavor it with any type of chocolate you prefer."]
  },
  {
    id: "laban-honey-milk-cake",
    name: "Laban & Honey Milk Cake",
    description: "A delicious and moist milk cake flavored with Laban and Honey, presenting a Middle Eastern interpretation of the traditional three-milk cake dessert.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "50 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop",
    ingredients: {
      "Three Milk Mixture": ["180ml full-fat Laban, plain", "20g honey (adjustable to taste)", "1/2 tsp salt", "280ml condensed milk", "100ml evaporated milk"],
      "Cake Sponge": ["4 eggs, separated", "70g white granulated sugar, divided in half", "80g all-purpose flour"],
      "Laban Whipped Cream": ["100ml whipping cream", "20g honey", "20ml full-fat Laban, plain"]
    },
    instructions: ["Warm the Laban, then add honey and salt, whisking until completely dissolved.", "Incorporate condensed milk and evaporated milk; set aside.", "Preheat oven to 180°C; grease and flour cake pan.", "Separate eggs; add 35g sugar to yolks and 35g to whites respectively.", "Whisk yolk mixture until pale and fluffy; whisk whites to stiff peaks.", "Fold egg whites and flour into yolk mixture in alternating parts, gently folding to maintain airiness.", "Transfer batter to prepared pan; bake 15-20 minutes until toothpick comes clean.", "While hot, poke holes with fork and gradually pour milk mixture until absorbed; refrigerate overnight.", "Combine whipping cream, laban, and honey; whip to stiff peaks for topping."],
    tips: ["Egg whites provide the sole leavening agent - avoid deflating during folding.", "Retain some milk mixture for serving.", "Allow cake to chill overnight for optimal milk absorption."]
  },
  {
    id: "stuffed-croissant-french-toast",
    name: "Stuffed Croissant French Toast",
    description: "A delicious and quick breakfast dessert made with store-bought croissants with two types of fillings - chocolate and strawberries & cream.",
    category: "French Toast",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    totalTime: "40 minutes",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
    ingredients: {
      "Main Components": ["2 full-size croissants (store-bought or fresh)", "2 eggs", "120ml full-fat milk", "50g granulated white sugar", "1 tsp vanilla essence"],
      "Chocolate Filling": ["50g Nutella"],
      "Strawberry & Cream Filling": ["100g thick cream", "50g strawberry jam"],
      "Toppings": ["Whipped cream", "Maple syrup", "Strawberries (optional)", "Chopped pistachios (optional)"]
    },
    instructions: ["Prepare the batter by combining eggs, milk, sugar, and vanilla with a hand whisk.", "Mix cream and jam together, swirling to create visible ripples; transfer to piping bag.", "Fill piping bag with Nutella for chocolate filling.", "Make 1-inch slit in croissants; pipe filling until puffed up.", "Soak filled croissants in batter for at least 1 minute per side (or overnight).", "Bake at 160°C for 15-20 minutes until crispy.", "Top with maple syrup, cream, and desired garnishes."],
    tips: ["Soak the croissants overnight for an even richer result.", "Use store-bought or fresh croissants."]
  },
  {
    id: "italian-meringue",
    name: "Italian Meringue",
    description: "A classic meringue made by pouring hot sugar syrup into whipped egg whites, perfect as a filling or topping for cakes and tarts.",
    category: "Desserts",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    totalTime: "45 minutes",
    servings: 1,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["80g water", "250g caster sugar"],
      "Egg Whites": ["100g egg white"]
    },
    instructions: ["In a clean, dry saucepan, pour the water. Then gently add the sugar over the water, avoiding any splashes.", "Place the mixture on low heat and set the sugar thermometer to 121 degrees Celsius.", "In a clean bowl of a stand or electric mixer, place the egg whites and whip on high speed until they reach stiff peaks.", "Once the sugar reaches 121°C, gradually pour it into the egg whites with the mixer on low speed. Be cautious and ensure the mixer speed stays low to prevent hot sugar syrup from splashing.", "After all the sugar syrup has been added, turn the mixer speed to high and whip until the mixture has cooled down.", "The mixture is now ready to use as a filling or topping for cakes or tarts.", "For baking: Pipe the Italian meringue mixture on a baking sheet and bake at 140°C for 30 minutes or until set."],
    tips: ["Use a clean, dry bowl and whisk to ensure egg whites whip properly.", "Keep the mixer on low speed when pouring hot sugar syrup to avoid splashing.", "A sugar thermometer is essential for reaching the correct 121°C temperature."]
  },
  {
    id: "easy-shortcrust-pastry",
    name: "Easy Shortcrust Pastry",
    description: "A simple and easy 4-ingredient pastry perfect for sweet tarts made with butter, sugar, eggs, and flour.",
    category: "Pastries",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    totalTime: "75 minutes",
    servings: 1,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Shortcrust Pastry": ["260g unsalted butter, softened", "200g caster sugar", "2 eggs", "500g all-purpose flour"]
    },
    instructions: ["In a stand mixer bowl, combine butter and sugar, beating on high speed for 5-8 minutes until properly creamed together.", "Add eggs and whip on medium-high speed until no liquid streaks remain and eggs are fully incorporated.", "Reduce mixer speed to low and gradually add flour, mixing until just incorporated without overmixing; dough should hold its shape.", "Transfer dough between baking paper sheets, roll to 2mm thickness evenly, then freeze for 15 minutes to maintain shape.", "After chilling, cut and shape dough for tart ring, chill another 15 minutes; poke small holes in base with fork if not using perforated ring.", "Preheat oven to 160°C, then bake 15-20 minutes until golden brown; larger tarts may require additional time."],
    tips: ["Freezing the dough helps it hold its shape when molding around the tart pan or ring.", "Poke fork holes in the base to prevent rising and ensure even baking.", "Do not overmix the dough once flour is added."]
  },
  {
    id: "choux-pastry-with-craquelin",
    name: "Choux Pastry with Craquelin",
    description: "Make cream puffs, eclairs, churros, crullers, and more with this one basic recipe featuring a crispy craquelin topping and silky pastry cream filling.",
    category: "Pastries",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "120 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    ingredients: {
      "Craquelin": ["70g unsalted butter", "70g all-purpose flour", "30g cocoa powder", "40g caster sugar", "1/2 tsp salt"],
      "Choux Pastry": ["120g butter", "90ml water", "12ml full-fat milk", "12g caster sugar", "1/4 tsp salt", "85g all-purpose flour", "2.25 eggs"],
      "Pastry Cream": ["100g egg yolk", "120g caster sugar", "50g cornflour", "500ml full-fat milk", "2 tsp vanilla extract", "100g butter"]
    },
    instructions: ["Preheat oven to 180°C.", "For craquelin: Combine all craquelin ingredients using a hand mixer or processor until dough holds shape.", "Roll craquelin dough to 2mm thickness between baking sheets, freeze 15-20 minutes, cut shapes.", "For choux: Combine butter, water, milk, sugar, and salt; bring to boil on medium heat.", "Stir flour into boiling mixture; continue 5-8 minutes until dough releases from pan sides.", "Transfer to stand mixer with paddle; mix on high 3-5 minutes until steam dissipates.", "Add eggs one at a time on medium speed until incorporated.", "Pipe dough into circles (cream puffs) or logs (eclairs) on parchment paper with adequate spacing.", "Place craquelin pieces on top of piped choux.", "Bake at 180°C for 20 minutes, then 160°C for 10-15 minutes until puffed and golden.", "Cool completely, make small hole at bottom.", "For pastry cream: Heat milk and vanilla in saucepan on low.", "Whisk egg yolks, cornflour, and caster sugar separately.", "Temper eggs by slowly adding half the hot milk while whisking.", "Transfer egg mixture back to saucepan; stir continuously 5-8 minutes until thickened.", "Remove from heat; stir in butter until smooth.", "Cover with plastic wrap touching surface; cool 2-4 hours minimum.", "Transfer pastry cream to piping bag; fill choux pastry."],
    tips: ["Cook the choux dough until it releases from the pan sides to remove excess moisture.", "Let steam dissipate before adding eggs to avoid cooking them.", "Cover pastry cream with plastic wrap directly on the surface to prevent a skin from forming."]
  },
  {
    id: "coca-cola-caramel-sauce",
    name: "Coca-Cola Caramel Sauce",
    description: "Turn your favorite soda into a caramel sauce with just 3 simple ingredients!",
    category: "Desserts",
    prepTime: "5 minutes",
    cookTime: "30 minutes",
    totalTime: "60 minutes",
    servings: 1,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&h=400&fit=crop",
    ingredients: {
      "Caramel Sauce": ["450ml Coca-Cola", "80ml liquid whipping cream", "15ml butter"]
    },
    instructions: ["Place a saucepan on medium heat and pour the cola into it. Bring to a boil and let it simmer for 20-30 minutes until it reduces to a slightly thick syrup.", "Once reduced, add the whipping cream and whisk until well combined. Let simmer for 5-8 minutes until reaching thick consistency.", "Remove from heat and add cold butter, whisking until melted and fully incorporated.", "Let the caramel chill for 30 minutes to 1 hour until it reaches a thick, caramel-like consistency."],
    tips: ["Use cold butter for a smoother finish.", "Let the caramel chill to reach the desired thick consistency."]
  },
  {
    id: "labneh-mousse-with-sumac-berries",
    name: "Labneh Mousse with Sumac Berries",
    description: "A delicious Middle-Eastern inspired dessert perfect for a party, featuring creamy labneh mousse with tangy sumac-spiced berries and a crunchy crumble.",
    category: "Desserts",
    prepTime: "60 minutes",
    cookTime: "15 minutes",
    totalTime: "555 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=400&fit=crop",
    ingredients: {
      "Labneh Mousse": ["5g gelatin", "25ml ice-cold water", "104ml full-fat milk", "104g white chocolate chips", "150ml liquid whipping cream/heavy cream", "150g full-fat labneh"],
      "Sumac Berries": ["200g mixed berries (frozen or fresh)", "40g sugar", "10ml lime juice", "1 tsp lime zest", "10g sumac powder", "100g mixed berries (extra, for folding in)"],
      "Crumble": ["50g brown sugar", "25g all-purpose flour", "1 tsp cinnamon powder", "Pinch of salt", "25g rolled oats", "Softened butter"]
    },
    instructions: ["Bloom gelatin with ice-cold water for 10-15 minutes.", "Place chocolate chips in heat-proof bowl.", "Heat milk until nearly boiling; pour hot milk over chocolate; let sit 30 seconds.", "Blend milk and chocolate into smooth ganache.", "Add bloomed gelatin while warm; blend until dissolved.", "Whip liquid cream to soft peaks separately.", "Add labneh to cream; whip to semi-stiff peaks.", "Gradually fold cooled ganache into cream mixture slowly.", "Mold and freeze 6-8 hours.", "Blend 200g berries with sugar, lime juice, zest, and sumac until smooth.", "Fold in remaining 100g berries whole; refrigerate.", "Preheat oven to 160°C.", "Mix crumble dry ingredients; rub in softened butter until chunky.", "Mix in oats; bake 15 minutes until golden-brown, stirring halfway.", "Unmold mousse, fill cavity with crumble then berry puree, or layer in glass dish with berry puree and crumble on top."],
    tips: ["Freeze the mousse for 6-8 hours for proper setting.", "Stir the crumble halfway through baking for even browning.", "For individual molds, freeze 1 hour then scoop a cavity for filling."]
  },
  {
    id: "vimto-chocolate-mousse-tart",
    name: "Vimto Chocolate Mousse Tart",
    description: "A smooth silky mousse tart paired with a delicious Vimto caramel, perfect for Ramadan!",
    category: "Tarts",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "150 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Tart Base": ["100g unsalted butter, cold", "70g icing sugar", "25g cocoa powder", "50g egg yolks", "175g all-purpose flour"],
      "Vimto Caramel": ["120ml Vimto syrup", "80ml liquid whipping cream", "12g unsalted butter"],
      "Vimto Chocolate Mousse": ["3g gelatin powder", "30ml ice-cold water", "105g milk chocolate", "105ml milk", "30ml Vimto syrup", "150ml liquid whipping cream", "Whipped cream (optional)", "Chocolate shards (optional)"]
    },
    instructions: ["Beat cold butter with sifted icing sugar and cocoa powder until creamy.", "Add egg yolks and mix until combined.", "Fold in flour carefully; roll dough thin between parchment.", "Freeze for 30 minutes; line tart pan quickly.", "Refrigerate 20 minutes; bake at 175°C for 20-22 minutes.", "For Vimto caramel: Simmer Vimto syrup 10-15 minutes until thickened.", "Heat whipping cream separately; combine with reduced syrup and simmer 2-3 minutes.", "Add cold butter and whisk until incorporated.", "Bloom gelatin in ice water for 10 minutes.", "Place milk chocolate in heat-proof bowl; heat milk with Vimto syrup until boiling.", "Pour hot milk mixture over chocolate; add bloomed gelatin while hot.", "Blend with hand blender; cool to room temperature.", "Whip cream to semi-stiff peaks; fold chocolate mixture into whipped cream gently.", "Pour thickened caramel into cooled tart base; refrigerate 15-20 minutes until firm.", "Pour mousse on top and spread evenly; chill 1-2 hours until set.", "Decorate with whipped cream and chocolate shards if desired."],
    tips: ["Use cold butter for the tart base for a crumbly, flaky texture.", "Refrigerate the caramel layer until firm before adding the mousse.", "Cool the chocolate mixture to room temperature before folding into cream."]
  },
  {
    id: "carrot-cake-french-toast",
    name: "Carrot Cake French Toast",
    description: "Give your regular french toast a carrot cake twist with this quick and delicious recipe using pantry staple ingredients!",
    category: "French Toast",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    totalTime: "25 minutes",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1639744093076-3cef44e2409d?w=600&h=400&fit=crop",
    ingredients: {
      "French Toast Batter": ["2 eggs", "100 ml full-fat milk", "30 grams brown sugar", "1/2 tsp cinnamon powder", "1/2 tsp nutmeg powder (can substitute with more cinnamon)", "30 grams shredded carrots", "2 tbsp unsalted butter", "2 slices brioche bread"],
      "Cream Cheese Glaze": ["60 grams cream cheese", "28 grams unsalted butter (softened)", "60 grams powdered sugar", "1 tsp vanilla essence"]
    },
    instructions: ["Combine eggs, milk, brown sugar, spices, and grated carrots (squeeze out excess moisture) into a cohesive batter.", "Heat butter in a non-stick pan over low-medium heat. Soak bread slices for 30 seconds per side, then cook until golden brown on both sides.", "Cook each slice until golden, flip, and repeat for the second slice.", "Whip softened cream cheese with butter, then incorporate icing sugar and vanilla until fully combined.", "Stack French toast with thick frosting between slices, top with remaining frosting, optional cinnamon and nuts, and serve hot."],
    tips: []
  },
  {
    id: "bourbon-biscuit-brownies",
    name: "Bourbon Biscuit Brownies",
    description: "These fudgy brownies are paired with a layer of crunchy bourbon biscuits, creating a nostalgic dessert that you won't stop eating!",
    category: "Brownies",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    totalTime: "135 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&h=400&fit=crop",
    ingredients: {
      "Main Batter": ["113g milk and dark chocolate (or milk chocolate only)", "175g unsalted butter", "150g granulated white sugar", "150g brown sugar (optional substitute: white sugar)", "3 eggs", "1/2 tsp vanilla extract", "125g all-purpose flour", "85g cocoa powder", "1/2 tsp salt"],
      "Additional": ["3 packets Bourbon Biscuits", "100g melted chocolate (optional, for topping)"]
    },
    instructions: ["Preheat oven to 170°C.", "Line pan with baking paper, leaving overhang on sides for easy removal.", "Melt chocolate and butter together (microwave or double boiler).", "Stir in sugars while mixture is hot, whisking 3-5 minutes.", "Incorporate eggs and vanilla extract.", "Fold in sifted cocoa powder, flour, and salt until combined.", "Spread thin batter layer on pan bottom, place biscuit layer, top with remaining batter.", "Bake 30-40 minutes until set but fudgy (toothpick should have crumbs).", "Cool completely before topping with melted chocolate (optional)."],
    tips: []
  },
  {
    id: "masala-chai-french-toast",
    name: "Masala Chai French Toast",
    description: "This delicious and simple French Toast takes inspiration from the classic chai and toast combination from South Asian households and turns it into a comforting, warm, breakfast dish.",
    category: "French Toast",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    totalTime: "40 minutes",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&h=400&fit=crop",
    ingredients: {
      "Chai Concentrate": ["350 ml full-fat milk", "10-12 grams tea leaves", "10 grams sugar", "4 cardamom pods", "1 cinnamon stick", "5-7 whole black pepper (or any whole spices)"],
      "Chai Milk Soak": ["150 ml chai concentrate (cooled)", "80 ml condensed milk", "40 ml evaporated milk"],
      "French Toast": ["2 thick brioche bread slices", "2 eggs", "130-150 ml chai concentrate (cooled)", "35 grams brown sugar", "1 tsp vanilla essence", "1 tsp cinnamon powder", "1/4 tsp salt"],
      "Toppings (Optional)": ["Whipping cream", "Caramel sauce"]
    },
    instructions: ["Brew chai concentrate by combining milk, tea leaves, sugar, and spices; simmer 10 minutes until well-cooked.", "Mix strained cooled chai with condensed and evaporated milk; set aside.", "Whisk eggs, chai concentrate, brown sugar, cinnamon, and salt together.", "Soak bread slices approximately 60 seconds per side without oversaturating.", "Heat ghee/butter in pan; cook bread 2-3 minutes per side until golden.", "Plate and pour generous chai soak on top; garnish with cream and caramel if desired."],
    tips: []
  },
  {
    id: "aunt-petunia-s-pudding",
    name: "Aunt Petunia's Pudding",
    description: "Recreate this iconic Harry Potter dessert for your next movie marathon. Crispy, chewy meringue layers paired with strawberry jam and whipped cream, decorated to look exactly like the one in the movie!",
    category: "Desserts",
    prepTime: "60 minutes",
    cookTime: "120 minutes",
    totalTime: "180 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
    ingredients: {
      "Pudding": ["160 ml water", "500 grams caster sugar", "200 grams egg white", "600 ml liquid whipped cream", "200 grams icing sugar", "100 grams Maraschino cherries"]
    },
    instructions: ["Create sugar syrup at low heat until reaching 121°C, using a thermometer and avoiding splashes.", "Whip egg whites to stiff peaks starting when syrup reaches 114°C.", "Gradually pour hot syrup into whipped whites at low mixer speed for safety.", "Whip mixture on high speed until cooled and glossy; preheat oven to 140°C.", "Draw circles (10 inch on one sheet; 7 inch on three sheets) as piping guides.", "Pipe large rosettes onto prepared sheets using large star tip; bake 20-30 minutes.", "Whip cream with icing sugar; divide into portions and color with green and purple food coloring.", "Assemble layers with jam and colored rosettes; decorate with green piping lines and cherries.", "Add maraschino cherries between rosettes on top layer and along green frosting lines."],
    tips: []
  },
  {
    id: "kunafa-cupcakes",
    name: "Kunafa Cupcakes",
    description: "Inspired by the classic Kunafa, these delicious cupcakes are made with a kunafa crust and fluffy vanilla cake, filled with thick cream, and topped with whipped cream, crispy kunafa dough, crushed nuts, and sugar syrup.",
    category: "Cupcakes",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "106 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=600&h=400&fit=crop",
    ingredients: {
      "Vanilla Cupcake": ["225g butter", "225g caster sugar", "4 eggs", "2 tsp vanilla essence", "200g flour", "1 tsp baking powder", "1/2 tsp salt"],
      "Kunafa Crust": ["120g Kunafa/Kataifi dough (chopped)", "100g melted butter"],
      "Sugar Syrup": ["200g sugar", "150ml water"],
      "Filling & Topping": ["200ml liquid whipping cream/heavy cream", "50g icing sugar", "100g melted butter", "120g Kunafa/Kataifi dough (chopped)", "200g thick cream", "Crushed nuts"]
    },
    instructions: ["Preheat oven to 170°C and line cupcake tray.", "Cream butter and caster sugar for 3-5 minutes until pale.", "Add eggs and vanilla, mix on medium-high for 2-3 minutes.", "Add flour, baking powder, and salt; mix until smooth.", "Combine chopped kunafa dough with melted butter.", "Add one tablespoon kunafa mixture per liner as base.", "Fill 3/4 with vanilla batter using ice cream scoop.", "Bake 20-25 minutes until toothpick comes clean.", "Prepare syrup: boil sugar and water without stirring, simmer 10 minutes.", "Whip cream with icing sugar to stiff peaks.", "Cook chopped kunafa in butter until golden brown.", "Create center pocket in cooled cupcakes using apple corer.", "Fill centers with thick cream.", "Pipe whipped cream on top.", "Add crispy kunafa, crushed nuts, and sugar syrup."],
    tips: []
  },
  {
    id: "rabdi-doughnuts",
    name: "Rabdi Doughnuts",
    description: "Soft and fluffy brioche doughnuts filled with a rich, creamy, and super delicious rabdi custard, and dusted with a brown sugar and cardamom mixture.",
    category: "Doughnuts",
    prepTime: "120 minutes",
    cookTime: "60 minutes",
    totalTime: "660 minutes",
    servings: 14,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600&h=400&fit=crop",
    ingredients: {
      "Rabdi": ["1 liter water", "85g milk powder", "125g white granulated sugar", "5g corn flour", "30ml full-fat milk", "1/2 tsp cardamom powder"],
      "Brioche Dough": ["2 eggs", "50g caster sugar", "1 tbsp salt", "10g instant yeast", "240ml warm milk", "170g melted butter", "560g all-purpose flour"],
      "Frying & Coating": ["300ml vegetable oil", "30g brown sugar", "20g white granulated sugar", "1 tsp cardamom powder"]
    },
    instructions: ["Prepare rabdi by heating water with milk powder and sugar, reducing for 15-20 minutes until concentrated.", "Add corn flour slurry to the thickened rabdi, followed by cardamom, then chill.", "Combine eggs, sugar, and salt for the dough; add yeast-milk mixture and butter.", "Incorporate flour gradually and knead until smooth.", "Cold-ferment the dough for 3+ hours.", "Roll out and cut dough into circles; second-proof until doubled.", "Fry at 170°C for 3 minutes per side until golden.", "Coat with spiced sugar mixture while warm.", "Fill cooled doughnuts with piped rabdi filling."],
    tips: []
  },
  {
    id: "rooh-afza-and-pistachio-mousse-cake",
    name: "Rooh Afza and Pistachio Mousse Cake",
    description: "The perfect Eid dessert with a super soft pistachio milk cake topped with a creamy and luscious Rooh Afza Mousse.",
    category: "Cakes",
    prepTime: "90 minutes",
    cookTime: "20 minutes",
    totalTime: "590 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=400&fit=crop",
    ingredients: {
      "Milk Cake": ["2 eggs (separated into whites and yolks)", "35g white granulated sugar", "40g all-purpose flour", "80ml liquid whipping cream", "140ml condensed milk", "50ml evaporated milk", "100g pistachio paste", "30ml ice-cold water", "6g gelatin powder"],
      "Rooh Afza Mousse": ["200g white chocolate", "75ml milk", "75ml liquid whipping cream", "100ml Rooh Afza syrup", "255ml liquid whipping cream/heavy cream"],
      "Garnish": ["Rooh Afza", "Sweetened whipped cream (optional)", "Chopped pistachios (optional)"]
    },
    instructions: ["Preheat oven to 180°C and prepare baking pan with parchment paper or greasing.", "Whip separated egg whites and yolks with sugar until light, fluffy, and reach medium peaks respectively.", "Fold egg whites and flour into yolks alternately in thirds, using gentle silicone spatula motions to preserve airiness.", "Transfer batter to prepared pan and bake 15-20 minutes until toothpick emerges clean; maintain approximately 2-inch thickness.", "Combine whipping cream, condensed milk, evaporated milk, and pistachio paste in bowl until fully blended.", "Pierce hot cake with fork and pour milk mixture generously; allow cooling.", "Bloom gelatin by sprinkling over ice-cold water, mixing immediately, then refrigerating 15 minutes.", "Heat milk, whipping cream, and Rooh Afza syrup in saucepan until boiling; pour over white chocolate in heat-proof bowl, wait one minute, then whisk until incorporated.", "Add bloomed gelatin to hot mixture while whisking until fully melted and combined.", "Cool mixture to room temperature.", "Whip 255ml liquid whipping cream separately until reaching medium peaks.", "Gradually fold cooled mixture into whipped cream using gentle folding motions.", "Top cooled milk cake with mousse layer; drizzle Rooh Afza drops and swirl.", "Refrigerate minimum 8 hours or overnight until fully set.", "Top with sweetened whipped cream and chopped pistachios before serving; serve cold."],
    tips: []
  },
  {
    id: "qahwa-arabic-coffee-tiramisu",
    name: "Qahwa (Arabic Coffee) Tiramisu",
    description: "A Middle-Eastern twist to the classic Tiramisu made with Qahwa or Arabic Coffee instead of regular coffee.",
    category: "Desserts",
    prepTime: "40 minutes",
    cookTime: "5 minutes",
    totalTime: "165 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Mascarpone Cream": ["4 egg yolks", "80 grams white granulated sugar", "400 grams mascarpone cheese", "1.5 tsp vanilla", "320 ml liquid whipping cream"],
      "Assembly": ["12-15 grams Qahwa (Arabic Coffee powder)", "250 ml hot water", "500 grams ladyfinger biscuits", "10 grams cocoa powder"]
    },
    instructions: ["Set up double boiler; heat water and place heat-proof bowl on top.", "Combine egg yolks and sugar in bowl; whisk over heat until pale and creamy; cool completely.", "Fold mascarpone and vanilla into cooled egg mixture.", "Whip cream to stiff peaks; fold gently into mascarpone mixture in two stages.", "Mix Qahwa powder with hot water.", "Dip each ladyfinger briefly (10-15 seconds) into coffee mixture; layer in dish.", "Add thick mascarpone layer, then repeat biscuit and cream layers.", "Chill 2-4 hours until set.", "Dust with cocoa powder before serving."],
    tips: []
  },
  {
    id: "almond-croissant-french-toast",
    name: "Almond Croissant French Toast",
    description: "Thick brioche slices filled with almond paste, coated in French toast batter and cooked to perfection, and finished with a sprinkle of icing sugar.",
    category: "French Toast",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    totalTime: "30 minutes",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=400&fit=crop",
    ingredients: {
      "Almond Paste": ["75g unsalted butter (softened)", "100g granulated white sugar", "25g almond flour", "1 egg", "2 tsp almond essence", "2 tsp vanilla essence", "1/4 tsp salt"],
      "French Toast Batter": ["2 eggs", "100ml full-fat milk", "50g granulated white sugar", "1 tsp vanilla essence", "1 tsp cinnamon", "1/4 tsp salt"],
      "Assembly": ["2 thick brioche slices", "2 tbsp ghee or butter (for cooking)", "1-2 tsp icing sugar (for topping)", "15-20g sliced almonds (for topping)"]
    },
    instructions: ["Whisk butter, sugar, salt, almond flour, egg, and essences for 3-5 minutes until pale and fluffy. Transfer to piping bag.", "Combine all batter ingredients thoroughly with hand whisk.", "Create a pocket by slicing horizontally into brioche without cutting through edges.", "Pipe almond paste into bread pockets, avoiding overfilling.", "Dip filled slices 30-40 seconds per side in egg mixture; avoid oversaturation.", "Cook in heated pan with butter 2-3 minutes per side until golden brown.", "Dust with icing sugar and top with sliced almonds. Serve warm."],
    tips: []
  },
  {
    id: "falooda-trifle",
    name: "Falooda Trifle",
    description: "Inspired by the famous Falooda, this trifle is made with layers of vanilla cake, rose syrup, basil seeds, and Kulfi mousse. Super simple to make and tastes absolutely delicious!",
    category: "Desserts",
    prepTime: "60 minutes",
    cookTime: "20 minutes",
    totalTime: "80 minutes",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    ingredients: {
      "Homemade Kulfi": ["360 ml full-fat milk", "75 grams sugar", "1 tablespoon khoya milk solids (optional)", "180 ml full-fat milk", "9 grams cornstarch/cornflour", "1/2 tsp cardamom powder", "Pinch of saffron", "50 grams thick cream"],
      "Kulfi Mousse": ["70 ml liquid whipping cream", "70 ml full-fat milk", "150 grams homemade kulfi", "200 grams white chocolate (chopped)", "225 ml liquid whipping cream for whipping"],
      "Assembly": ["1 tbsp basil seeds", "2-3 tbsp water (for blooming basil seeds)", "1 loaf store-bought vanilla pound cake", "2-4 tbsps rose syrup", "200 grams strawberries (finely chopped)"]
    },
    instructions: ["Boil 360ml milk for five minutes, stirring continuously to prevent burning.", "Add sugar and khoya; cook five more minutes until thickened.", "Create cornflour slurry with remaining milk; gradually add while stirring on low heat.", "Mix in cardamom and saffron; cook 3-5 minutes until thickened.", "Add cream; cook two additional minutes; cool completely.", "Combine white chocolate with heated milk mixture; whisk until incorporated.", "Whip 225ml cream to medium peaks in separate bowl.", "Fold cooled chocolate mixture into whipped cream gently.", "Bloom basil seeds in water for 20 minutes until soft.", "Slice and cut vanilla cake into circles fitting trifle bowls.", "Layer cake with rose syrup at bowl bottom.", "Add bloomed basil seeds and chopped strawberries.", "Pipe or spoon kulfi mousse on top.", "Refrigerate 1-2 hours to set.", "Top with additional strawberries, rose syrup, and basil seeds before serving cold."],
    tips: []
  },
  {
    id: "brioche-doughnut-holes",
    name: "Brioche Doughnut Holes",
    description: "These soft, fluffy, melt-in-your-mouth doughnut holes are the perfect sharing treat, made with a simple brioche dough using seven ingredients and can be prepared a day in advance.",
    category: "Doughnuts",
    prepTime: "60 minutes",
    cookTime: "10 minutes",
    totalTime: "250 minutes",
    servings: 30,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?w=600&h=400&fit=crop",
    ingredients: {
      "Brioche Dough": ["1 egg", "25 grams caster sugar", "1/2 tablespoon salt", "5 grams instant yeast", "120 ml warm milk", "85 grams melted butter", "280 grams all-purpose flour"],
      "Frying & Coating": ["300 ml vegetable oil for frying", "50 grams white granulated sugar", "2 teaspoons cinnamon powder"],
      "Serving": ["Dipping of choice (melted chocolate, jam, caramel sauce, etc.)"]
    },
    instructions: ["Whisk egg, sugar, and salt together.", "Mix warm milk with instant yeast; combine with egg mixture.", "Add melted butter and half the flour; mix to thick batter consistency.", "Add remaining flour; knead 5-10 minutes (stand mixer) or 10-15 minutes (by hand).", "Refrigerate in oiled bowl for three hours or overnight until doubled.", "Form 15-gram dough balls; arrange on baking paper.", "Rise 45-60 minutes until doubled; heat oil to 170°C.", "Mix cinnamon sugar in separate bowl.", "Fry doughnuts 2-3 minutes until golden brown on both sides.", "Transfer to paper towels; toss in cinnamon sugar while hot.", "Serve with desired dipping sauce."],
    tips: []
  },
  {
    id: "rabdi-mousse-cake",
    name: "Rabdi Mousse Cake",
    description: "This cake brings the flavors of one of South Asia's most popular desserts into a mousse cake, featuring a light three-milk cake base topped with creamy rabdi mousse and a nutty white chocolate shell.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "480 minutes",
    servings: 10,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12571?w=600&h=400&fit=crop",
    ingredients: {
      "Milk Cake": ["2 eggs (separated)", "1/2 tsp vanilla", "35g white granulated sugar", "40g all-purpose flour", "80 ml liquid whipping cream", "180 ml condensed milk", "50 ml evaporated milk"],
      "Rabdi": ["1 liter water", "85g milk powder", "125g white granulated sugar", "5g corn flour", "30g full-fat milk (for slurry)", "1/2 tsp cardamom powder"],
      "Rabdi Mousse": ["70 ml liquid whipping cream", "70 ml full-fat milk", "150g homemade rabdi", "6g gelatin powder", "30 ml ice-cold water", "200g white chocolate (chopped)", "225 ml liquid whipping cream (for whipping)"],
      "Chocolate Shell": ["200g white chocolate", "20 ml neutral oil", "60g chopped nuts"]
    },
    instructions: ["Prepare milk cake by whipping egg whites and yolks separately with sugar, folding gently with flour, then baking 15-20 minutes.", "Create milk mixture from cream and condensed/evaporated milk; soak warm cake with fork-poked holes.", "Reduce milk powder mixture for 15-20 minutes until thickened and caramelized.", "Add corn flour slurry and cardamom; chill 1-2 hours, then whip smooth.", "Bloom gelatin in ice water for 15 minutes.", "Heat milk/cream/rabdi mixture; pour over chopped chocolate; melt and whisk together.", "Add bloomed gelatin while hot; cool to room temperature.", "Whip separate cream to medium peaks; fold gently into cooled chocolate mixture.", "Layer rabdi on soaked cake; top with mousse; chill 6-8 hours overnight.", "Mix melted chocolate with oil and nuts; pour over set dessert; cool until shell hardens."],
    tips: []
  },
  {
    id: "shahi-tukda-croissant",
    name: "Shahi Tukda Croissant",
    description: "Flaky and crispy croissants filled with Rabdi, a modern twist on the classic Shahi Tukda. A super simple dessert that will impress your guests like nothing else!",
    category: "Pastries",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "170 minutes",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop",
    ingredients: {
      "Rabdi": ["1 liter water", "85 grams milk powder", "125 grams white granulated sugar", "5 grams corn flour", "30 grams full-fat milk (for corn flour slurry)", "1/2 tsp cardamom powder"],
      "Assembly": ["4 store-bought croissants", "Whipped cream or icing sugar (for topping)", "Chopped nuts of your choice"]
    },
    instructions: ["Warm water and dissolve milk powder and sugar thoroughly.", "Bring to boil, then simmer 15-20 minutes on medium-low, stirring frequently.", "Remove 1/2 cup milk; set aside for soaking.", "Continue cooking until reduced to 1/4 original quantity, caramelized.", "Mix corn flour with milk, add to thickened mixture while stirring.", "Add cardamom powder; cook 5-8 minutes until thickened.", "Chill in refrigerator for 1-2 hours.", "Whip with hand whisk; transfer to piping bag.", "Cut croissants width-wise, keeping one edge intact.", "Soak interior with reserved milk.", "Bake at 130°C for 5 minutes until crispy.", "Cool 5-10 minutes.", "Pipe rabdi filling inside.", "Top with icing sugar/whipped cream and nuts; serve fresh."],
    tips: ["Avoid overfilling croissants to maintain ease of eating."]
  },
  {
    id: "kunafa-pancakes",
    name: "Kunafa Pancakes",
    description: "Soft and fluffy buttermilk pancakes with a crispy Kunafa crust, layered with sugar syrup and thick cream to create an epic pancake stack.",
    category: "Pancakes",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    totalTime: "40 minutes",
    servings: 3,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["100g granulated white sugar", "65ml water"],
      "Pancake Batter": ["120g flour", "30g sugar", "10g baking powder", "1/2 tsp salt", "150ml buttermilk (or regular milk with 1 tsp vinegar)", "1 egg", "1 tsp vanilla essence", "30g unsalted butter (melted)"],
      "Assembly": ["50g Kunafa dough", "50g unsalted butter (for cooking)", "100g thick cream (for layering)"]
    },
    instructions: ["Make syrup by combining sugar and water in a saucepan. Heat without stirring until boiling, then reduce heat and simmer 8-10 minutes until thick enough to coat a spoon.", "Whisk together flour, sugar, baking powder, and salt.", "Combine buttermilk, egg, and vanilla in separate bowl, then gradually whisk in melted butter.", "Mix wet and dry ingredients; let batter rest 10 minutes.", "Heat pan with butter; add Kunafa dough and cook until golden-brown, stirring frequently (under 5 minutes).", "Spread cooked Kunafa evenly, pour two spoonfuls batter on top, cover and cook on low heat 2-3 minutes until bubbly. Flip and cook two more minutes.", "Pour syrup onto hot Kunafa side while pancake is still warm for proper absorption.", "Layer pancakes by stacking with cream between each, topping final pancake with cream and reserved crispy Kunafa. Drizzle with syrup. Serve warm."],
    tips: ["Prepare Kunafa in a single batch beforehand to reduce cooking time for multiple pancakes."]
  },
  {
    id: "creme-brulee-brioche-doughnuts",
    name: "Creme Brulee Brioche Doughnuts",
    description: "Soft and fluffy brioche doughnuts filled with a silky smooth and delicious vanilla pastry cream and topped with a crisp caramelized sugar shell.",
    category: "Doughnuts",
    prepTime: "120 minutes",
    cookTime: "40 minutes",
    totalTime: "340 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600&h=400&fit=crop",
    ingredients: {
      "Brioche Doughnuts": ["2 eggs", "50g caster sugar", "1 tablespoon salt", "10g instant yeast", "240ml warm milk", "170g butter (melted)", "560g all-purpose flour", "300ml vegetable oil (for frying)"],
      "Vanilla Pastry Cream": ["60g egg yolks (approximately 4)", "72g caster sugar", "30g cornflour", "300ml full-fat milk", "2 tsp vanilla essence (or 1 vanilla bean)", "30g unsalted butter"],
      "Caramel": ["200g white granulated sugar", "65ml water"]
    },
    instructions: ["Combine eggs, sugar, and salt and whisk until blended.", "Mix warm milk with instant yeast separately, then combine with egg mixture.", "Add melted butter and whisk, then incorporate half the flour until a batter forms.", "Add the remaining flour and knead for 5-10 minutes (stand mixer) or 10-15 minutes (by hand) until smooth and a soft ball forms.", "Transfer to an oiled bowl, cover, and refrigerate for 3+ hours or overnight.", "Roll the chilled dough to 1.5cm thickness on a floured surface.", "Cut circles with a floured cutter and place on parchment paper.", "Let proof for 30-45 minutes in a warm place until doubled in size.", "Fry at 170°C for 3 minutes per side until golden brown.", "Cool on paper towels.", "For the pastry cream: Boil milk with vanilla. Whisk egg yolks with caster sugar and cornflour until pale.", "Temper the eggs by adding half the boiling milk while whisking continuously.", "Return mixture to the saucepan and whisk continuously for 2 minutes until thickened.", "Remove from heat, add butter and whisk until smooth.", "Chill for at least 1 hour in a bowl covered with cling film touching the surface.", "Pipe the pastry cream into the cooled doughnuts.", "For the caramel: Combine sugar and water in a saucepan, swirling gently without stirring.", "Heat on medium until golden amber, then immediately dip the doughnut tops into the caramel.", "Avoid multiple layers of caramel. Reheat if it hardens. Let set at room temperature."],
    tips: ["Do not use a spoon while making caramel to prevent crystallization.", "Ensure even dough thickness before cutting.", "Reheat caramel if it hardens during the topping process."]
  },
  {
    id: "carrot-cinnamon-rolls",
    name: "Carrot Cinnamon Rolls",
    description: "Soft and fluffy rolls inspired by gajar halwa, filled with a quick and easy sweet carrot filling and topped with a milky custard.",
    category: "Pastries",
    prepTime: "120 minutes",
    cookTime: "40 minutes",
    totalTime: "340 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Carrot Filling": ["250g shredded carrots", "150ml condensed milk", "1/2 tsp cinnamon powder", "1/2 tsp nutmeg powder", "3 tbsp ghee", "92g granulated white sugar"],
      "Roll Dough": ["78g unsalted butter (softened)", "7g salt", "1 large egg", "454g all-purpose flour", "6g instant yeast", "255ml full-fat milk (lukewarm)"],
      "Custard (Creme Anglaise)": ["100g egg yolks", "80g caster sugar", "500ml full-fat milk", "1 tsp vanilla essence"]
    },
    instructions: ["Shred carrots thinly and squeeze out excess liquids.", "Heat ghee in a pan and toast cardamom pods.", "Cook carrots until the color changes and moisture reduces.", "Add condensed milk and spices; combine well.", "Cover and cook for 8-10 minutes until softened, then chill the filling.", "Cream butter, sugar, and salt together, then add the egg.", "Mix flour, lukewarm milk, and yeast until a dough forms.", "Knead until smooth and soft (passes the windowpane test).", "Place dough in an oiled bowl and let rise for 1.5-2 hours until doubled.", "Roll dough into a 14x18 inch rectangle, about 2/3 inch thick.", "Spread the carrot filling evenly over the dough.", "Roll horizontally tightly, then slice with dental floss.", "Place rolls in a pan with space between them, cover and proof for 1.5-2 hours.", "Bake at 160-170°C for 15-20 minutes until blonde.", "For the custard: Heat milk and vanilla in a saucepan.", "Whisk egg yolks and caster sugar together.", "Temper the eggs by adding half the hot milk while whisking.", "Transfer mixture to saucepan and whisk for 3-5 minutes until thickened.", "Strain the custard to stop cooking.", "Top warm buns with custard and rest for 5-10 minutes before serving."],
    tips: ["Squeeze out excess liquid from shredded carrots before cooking.", "Use dental floss to slice the rolls for clean cuts.", "Strain the custard immediately to prevent overcooking."]
  },
  {
    id: "homemade-ferrero-rocher-ice-cream",
    name: "Homemade Ferrero Rocher Ice Cream",
    description: "Nutella-flavored ice cream mixed with hazelnuts, crunchy wafers, and Nutella swirls, topped with a classic Ferrero-style chocolate and hazelnut shell.",
    category: "Ice Cream",
    prepTime: "20 minutes",
    cookTime: "0 minutes",
    totalTime: "20 minutes (plus 8+ hours freezing)",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop",
    ingredients: {
      "Ice Cream Base": ["200ml liquid whipping cream/heavy cream", "160ml condensed milk", "120g Nutella", "25g chopped hazelnuts"],
      "Topping": ["20g Nutella", "20g crunchy wafer", "50g milk chocolate", "5ml neutral oil", "20g chopped hazelnuts"]
    },
    instructions: ["Whip cream until stiff peaks form without overmixing.", "Add condensed milk and Nutella; whip until fully combined and stable, then fold in chopped hazelnuts.", "Transfer to a bowl, add Nutella dollops and wafers, swirl with a spatula, and freeze for 8+ hours.", "Melt chocolate and mix with oil and chopped hazelnuts for the shell.", "Top with the chocolate shell when serving, let it set, crack through, and enjoy."],
    tips: ["Do not overmix the cream to avoid a grainy texture.", "Freeze for a minimum of 8 hours for best results."]
  },
  {
    id: "kulfi-mousse-cake",
    name: "Kulfi Mousse Cake",
    description: "A modern twist on a classic South Asian dessert, featuring a soft vanilla cake layer topped with a creamy kulfi mousse and a crispy white chocolate shell.",
    category: "Cakes",
    prepTime: "120 minutes",
    cookTime: "45 minutes",
    totalTime: "405 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop",
    ingredients: {
      "Vanilla Cake": ["112g butter", "112g caster sugar", "2 eggs", "1 tsp vanilla essence", "100g flour", "1/2 tsp baking powder", "1/2 tsp salt", "2 tsp milk"],
      "Homemade Kulfi": ["360ml full-fat milk", "75g sugar", "1 tablespoon khoya (milk solids, optional)", "180ml full-fat milk", "9g cornstarch/cornflour", "1/2 tsp cardamom powder", "Pinch of saffron", "50g thick cream"],
      "Kulfi Mousse": ["70ml liquid whipping cream", "70ml full-fat milk", "150g homemade kulfi", "6g gelatin powder", "30ml ice-cold water (for blooming gelatin)", "200g white chocolate (chopped)", "225ml liquid whipping cream (for whipping)"],
      "Chocolate Shell": ["200g white chocolate", "20ml neutral oil", "60g nuts of choice (chopped)"]
    },
    instructions: ["Preheat oven to 180°C; prepare cake pan with butter and flour.", "Cream butter and caster sugar for 3-5 minutes until pale and creamy.", "Add eggs and vanilla; mix for 2-3 minutes. Add flour, baking powder, and salt; mix until a thick batter forms.", "Add milk and mix. Transfer to prepared pan and bake for 20-25 minutes until a toothpick comes out clean. Cool before layering.", "For the kulfi: Bring 360ml milk to a boil on medium heat and cook for 5 more minutes, stirring constantly.", "Add sugar and khoya; mix until combined. Cook for 5 minutes until thickened.", "Create a milk-cornflour slurry with 180ml milk and cornstarch. Reduce heat to low and gradually add the slurry while stirring. Add cardamom and saffron; cook 3-5 minutes until thick.", "Add cream and cook for 2 minutes. Remove from heat and cool before using.", "Bloom gelatin: Pour ice-cold water in a bowl, sprinkle gelatin over it, mix immediately until dissolved, and refrigerate for 15 minutes.", "In a heat-proof bowl, add chopped white chocolate. Heat milk, whipping cream, and homemade kulfi in a saucepan until boiling. Pour over chocolate, let sit for 1 minute, then whisk until fully incorporated.", "While hot, add bloomed gelatin and whisk until fully melted. Cool to room temperature.", "In a separate bowl, whip 225ml liquid whipping cream to medium peaks. Once the milk mixture reaches room temperature, gradually pour into whipped cream while folding gently with a silicone spatula.", "Assembly: Place vanilla cake layer in dish or frame. Spread a thin layer of remaining homemade kulfi. Top with kulfi mousse. Chill for 3-6 hours or overnight.", "Prepare chocolate shell: Mix melted white chocolate with oil and chopped nuts. Pour over the set dessert, allowing it to flow down the sides. Use an offset spatula to cover all spots. Let cool until the shell is completely set."],
    tips: ["Bake the cake in the same shape and size as the dessert dish for easy layering.", "Stir constantly when reducing milk to prevent burning.", "Fold the mousse gently to maintain lightness and airiness."]
  },
  {
    id: "homemade-brioche-doughnuts",
    name: "Homemade Brioche Doughnuts",
    description: "The best doughnuts you will ever eat made with a simple brioche dough using only seven ingredients, coated in cinnamon sugar and filled with your favorite filling.",
    category: "Doughnuts",
    prepTime: "60 minutes",
    cookTime: "20 minutes",
    totalTime: "260 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&h=400&fit=crop",
    ingredients: {
      "Brioche Dough": ["2 eggs", "50g caster sugar", "1 tablespoon salt", "10g instant yeast", "240ml warm milk", "170g butter (melted)", "560g all-purpose flour"],
      "For Frying and Coating": ["300ml vegetable oil (for frying)", "50g white granulated sugar (for cinnamon sugar)", "2 tsp cinnamon powder (for cinnamon sugar)"],
      "Filling": ["Filling of your choice (e.g., vanilla custard or lemon curd)"]
    },
    instructions: ["Combine eggs, sugar, and salt; whisk until blended.", "Mix warm milk with instant yeast separately; combine with egg mixture.", "Add melted butter and whisk; incorporate half the flour until batter-like.", "Add remaining flour; knead 5-10 minutes (stand mixer) or 10-15 minutes (by hand) until smooth.", "Transfer to an oiled bowl, cover, and refrigerate for 3 hours or overnight until doubled.", "Roll dough to 1.5cm thickness on a floured surface.", "Cut circles with a floured cutter; cut a center hole for classic doughnut style.", "Let rise for 30-45 minutes in a warm place until doubled.", "Fry at 170°C for 3 minutes per side until golden.", "Drain on paper towels; roll in cinnamon sugar while hot.", "Cool before filling using a piping bag with your choice of filling."],
    tips: ["Refrigerate the dough overnight for best results.", "Ensure oil is at exactly 170°C for even frying.", "Roll doughnuts in cinnamon sugar while still hot so it sticks well.", "Cool completely before filling to prevent the filling from melting."]
  },
  {
    id: "cereal-milk-tres-leches-cake",
    name: "Cereal Milk Tres Leches Cake",
    description: "Turn your favorite bowl of cereal into a dessert with this simple, fun, and delicious cereal milk tres leches cake made with only seven ingredients.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "450 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop",
    ingredients: {
      "Cereal Milk Mixture": ["200g cereal of your choice", "600ml full-fat milk", "140ml condensed milk", "80ml evaporated milk"],
      "Cake Sponge": ["4 eggs (separated into whites and yolks)", "70g white granulated sugar (divided)", "1 tsp vanilla essence", "80g all-purpose flour"],
      "Cereal Milk Whipped Cream": ["100g cereal of your choice plus extra for topping", "300ml liquid whipping cream", "30g icing sugar", "10g milk powder (optional)"]
    },
    instructions: ["Make the cereal milk by soaking warm milk and cereal in a bowl for at least 30 minutes, then strain and discard the soaked cereal.", "Mix cereal milk with condensed and evaporated milk using a hand whisk.", "Preheat oven to 170°C and prepare baking pan with parchment paper or grease with butter and flour.", "Separate eggs; whip yolks with half the sugar and vanilla until light and fluffy; whip whites with remaining sugar until stiff peaks form.", "Fold egg white mixture and flour into yolk mixture alternately in thirds, gently with a silicone spatula.", "Transfer batter to prepared pan and bake for 20-25 minutes until a toothpick comes out clean.", "Poke holes in the hot cake with a fork and pour the generous cereal milk mixture while the cake is still hot. Chill for 3-4 hours.", "Soak whipping cream with cereal for up to 1 hour, then strain. Add milk powder and icing sugar; whip to stiff peaks.", "Pipe or spread cream on the cooled cake, top with crushed cereal, and serve with reserved milk mixture."],
    tips: ["Soak the cereal in warm milk for at least 30 minutes for maximum flavor extraction.", "The airiness of the egg whites is what helps the cake rise, so fold gently to preserve airiness.", "Pour the milk mixture while the cake is still hot for better absorption."]
  },
  {
    id: "little-hearts-milkshake",
    name: "Little Hearts Milkshake",
    description: "Relive your childhood with this simple, quick, and delicious Little Hearts milkshake made with only four ingredients.",
    category: "Drinks",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    totalTime: "10 minutes",
    servings: 1,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
    ingredients: {
      "Milkshake": ["250g vanilla ice cream", "50ml full-fat milk", "50ml liquid whipping cream (can substitute with additional milk)", "1 pack Little Hearts biscuits"],
      "Topping": ["Whipped cream (optional)", "Extra Little Hearts biscuits for garnish"]
    },
    instructions: ["Combine all ingredients in a blender jar and blend until the biscuits are fully crushed and combined.", "Top with whipped cream and additional Little Hearts biscuits; serve cold."],
    tips: ["Serve immediately for the best texture.", "Substitute whipping cream with additional milk for a lighter version."]
  },
  {
    id: "treacle-tart",
    name: "Treacle Tart",
    description: "A simple and delicious classic British dessert featuring a crisp shortcrust pastry shell with a gooey golden syrup filling -- one of Harry Potter's favorites.",
    category: "Tarts",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "120 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop",
    ingredients: {
      "Shortcrust Pastry": ["65g softened butter", "40g icing sugar", "1 egg (beaten separately)", "125g all-purpose flour", "Pinch of salt", "1 egg (for egg wash)"],
      "Tart Filling": ["175g golden syrup", "40g white bread crumbs", "25g ground almonds", "1 egg", "50ml heavy cream/liquid whipping cream", "Ice cream or custard (optional, for serving)"]
    },
    instructions: ["Cream butter and sugar until pale and fluffy; add beaten egg and mix well.", "Gradually add flour and salt on low speed until a thick dough forms; avoid overmixing.", "Wrap dough in cling film and chill for 1-2 hours until firm.", "Roll dough to 2mm thickness between sheets of baking paper.", "Line tart pan, leaving overhang; poke base with a fork; chill for 30 minutes.", "Preheat oven to 180°C; blind bake with parchment and baking beans for 15-20 minutes.", "Remove weights, apply egg wash, and bake for 5-10 minutes until golden.", "Trim excess dough with a sharp knife immediately after baking.", "Reduce oven to 160°C.", "Mix golden syrup, bread crumbs, and ground almonds.", "Add egg and heavy cream; mix until combined.", "Transfer filling to the pastry shell; bake for 20-30 minutes until set.", "Serve warm with ice cream or custard."],
    tips: ["Do not overmix the pastry dough to keep it tender.", "Chill the pastry-lined tart pan for 30 minutes before blind baking to prevent shrinking.", "Trim excess dough immediately after baking while it is still warm."]
  },
  {
    id: "3-ingredient-rooh-afza-ice-cream",
    name: "3-Ingredient Rooh Afza Ice Cream",
    description: "The perfect no-bake summer dessert made with only 3 ingredients, this Rooh Afza ice cream delivers refreshment with beautiful pink swirls.",
    category: "Ice Cream",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    totalTime: "435 minutes",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
    ingredients: {
      "Ice Cream": ["200ml liquid whipping cream", "160ml condensed milk", "25ml Rooh Afza", "Chopped pistachios (optional)"]
    },
    instructions: ["Whip liquid whipping cream in a bowl until almost reaching stiff peaks; avoid overmixing.", "Add condensed milk and Rooh Afza; mix for 2-3 minutes until fully combined.", "Mix in chopped pistachios if using; transfer mixture to a serving bowl.", "Swirl in a few drops of Rooh Afza syrup on top and freeze overnight."],
    tips: ["Avoid overmixing the cream to prevent a grainy texture.", "Freeze overnight for the best consistency."]
  },
  {
    id: "masala-chai-milk-cake",
    name: "Masala Chai Milk Cake",
    description: "A simple cake made with a 4-ingredient sponge and drenched in a three-milk mixture jam-packed with authentic masala chai flavor.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    totalTime: "420 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&h=400&fit=crop",
    ingredients: {
      "Cake Sponge": ["4 eggs (separated into whites and yolks)", "70g white granulated sugar", "1 tsp vanilla essence", "80g all-purpose flour"],
      "Chai Milk Mixture": ["400ml full-fat milk", "14g tea leaves", "14g sugar", "Whole spices (baker's choice)", "140ml condensed milk", "80ml evaporated milk"],
      "Topping": ["Sweetened whipped cream", "Parle-G biscuits (crushed)"]
    },
    instructions: ["Preheat oven to 180°C; prepare baking pan with parchment paper or butter and flour coating.", "Separate eggs; whip yolks with half the sugar and vanilla until fluffy; whip whites with remaining sugar until stiff peaks form.", "Fold egg white mixture and flour into yolk mixture alternately in thirds, gently preserving airiness.", "Transfer batter to pan; bake for 20-30 minutes until a toothpick comes out clean.", "For the chai milk: Place milk, tea leaves, sugar, and whole spices in a saucepan and bring to a boil on high heat, then simmer on low heat for 10-15 minutes and strain.", "Mix the cooked chai with condensed and evaporated milk using a hand whisk until combined.", "Poke holes throughout the hot cake using a fork; pour the chai milk mixture while the cake is still warm.", "Refrigerate for 3-4 hours minimum.", "Top the cooled cake with sweetened whipped cream and crushed Parle-G biscuits; serve chilled with reserved milk."],
    tips: ["There is no baking powder in this cake. The airiness of the egg whites is what helps the cake rise and gives it a spongy texture. If you knock a lot of air out while mixing, your cake will be flat and dense.", "Poke holes into the cake using a fork to help the milk soak better.", "Pour the milk mixture while the cake is still hot for maximum absorption."]
  },
  {
    id: "baklava-cheesecake-rolls",
    name: "Baklava Cheesecake Rolls",
    description: "Crispy, crunchy phyllo pastry with classic baklava flavors filled with a creamy cream cheese filling that can be prepared weeks ahead and frozen.",
    category: "Cheesecakes",
    prepTime: "60 minutes",
    cookTime: "20 minutes",
    totalTime: "80 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
    ingredients: {
      "Cheesecake Filling": ["200g cream cheese (softened)", "55g white granulated sugar", "30g sour cream", "1 tsp vanilla essence", "1/2 egg"],
      "Baklava Assembly": ["12 sheets phyllo pastry", "300g melted butter", "200g pistachios", "2 tsp cinnamon powder", "200g white granulated sugar", "150g water"]
    },
    instructions: ["Whisk cream cheese and sugar until smooth, checking for graininess.", "Mix in sour cream and vanilla essence.", "Add egg and incorporate fully; transfer to a piping bag and chill.", "Blend pistachios with cinnamon into a rough powder.", "Layer phyllo sheets, brushing each with butter and sprinkling the pistachio mixture.", "Pipe cheesecake filling 2-3 inches from phyllo tip; roll into a cigar shape.", "Fold sides envelope-style, brush with butter, and continue rolling until sealed.", "Freeze in ziplock bags if making ahead.", "Bake at 180°C for 15-20 minutes until golden.", "Prepare syrup by boiling sugar and water for 10 minutes until thickened.", "Top rolls with syrup and chopped pistachios; serve warm."],
    tips: ["Can be frozen in ziplock bags and baked directly from frozen.", "Check cream cheese mixture for graininess before proceeding.", "Brush each phyllo layer generously with butter to ensure crispiness."]
  },
  {
    id: "qahwa-three-milk-cake",
    name: "Qahwa Three Milk Cake",
    description: "A Middle Eastern twist on the classic Mexican tres leches dessert, with the three-milk mixture flavored with Arabic coffee and topped with chocolate whipped cream.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "50 minutes (plus overnight chilling)",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
    ingredients: {
      "Three Milk Mixture": ["160ml liquid whipping cream or heavy cream", "17g instant Arabic coffee powder", "280ml condensed milk", "100ml evaporated milk"],
      "Cake Sponge": ["4 eggs (separated)", "70g sugar (divided in half)", "80g all-purpose flour"],
      "Chocolate Whipped Cream Topping": ["200g liquid whipping cream", "50g cocoa powder"]
    },
    instructions: ["Warm liquid whipping cream and dissolve instant Qahwa powder into it completely.", "Add condensed and evaporated milk to cream mixture; whisk and set aside.", "Preheat oven to 180°C and prepare cake pan with butter and flour.", "Separate eggs; add half the sugar (35g) to yolks and remaining half to whites.", "Whisk yolk-sugar mixture until pale, fluffy, and creamy.", "Whisk egg white-sugar mixture to stiff peaks; measure flour separately.", "Fold egg white mixture and flour into yolks alternately in two increments, maintaining airiness.", "Transfer batter to prepared pan; bake for 15-20 minutes until a toothpick comes out clean.", "Poke holes in the hot cake; pour the milk mixture until absorbed. Keep adding the milk until the cake stops absorbing it. Chill overnight.", "Prepare chocolate whipped cream; top cake with cream and remaining milk before serving."],
    tips: ["Make sure you are taking your time and folding the ingredients in gently. You want to maintain the airiness of the egg whites so that your cake is light, fluffy, and not dense.", "Keep adding the milk until the cake stops absorbing it.", "Let the cake chill in the fridge overnight before serving for best results."]
  },
  {
    id: "ted-lasso-biscuits-with-the-boss",
    name: "Ted Lasso Biscuits With The Boss",
    description: "Sweet, crisp, and crumbly shortbread cookies inspired by Ted Lasso, the perfect accompaniment for tea and coffee, made with only 4 ingredients.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "60 minutes",
    totalTime: "120 minutes",
    servings: 10,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop",
    ingredients: {
      "Biscuit Dough": ["225g unsalted butter (softened)", "90g icing sugar", "240g all-purpose flour", "1/2 tsp salt", "1/2 tsp vanilla essence (optional)"]
    },
    instructions: ["Whip softened butter on high speed using an electric or stand mixer for 3-4 minutes until pale and creamy. Add vanilla with the butter if using.", "On low speed, gradually add icing sugar and whisk until fully combined.", "Sift flour and salt into the batter and mix on low speed until fully combined into a thick dough. Avoid overmixing.", "Transfer dough to a parchment-lined baking sheet, form a 1/2-inch thick layer, and chill for 30 minutes. Preheat oven to 150°C.", "Once chilled, cut dough to form biscuit shapes. Bake for 45-60 minutes until sides are golden brown.", "Remove from oven and while still hot and soft, re-cut along the same lines. Allow to cool completely before serving."],
    tips: ["Avoid overmixing the dough to keep the biscuits crumbly and tender.", "Re-cut along the same lines while the biscuits are still hot and soft for clean edges.", "Allow biscuits to cool completely before serving as they firm up as they cool."]
  },
  {
    id: "kunafa-cookies",
    name: "Kunafa Cookies",
    description: "All the delicious flavors of a kunafa in the form of a cookie, featuring a crispy kataifi topping, creamy filling, and sweet sugar syrup.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    totalTime: "525 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["140g all-purpose flour", "1/2 tsp baking powder", "1/2 tsp baking soda", "1/4 tsp salt", "113g unsalted butter (softened)", "150g white granulated sugar", "50g kataifi dough (defrosted)", "1 egg", "1 tsp vanilla essence"],
      "Filling": ["100g thick cream"],
      "Sugar Syrup": ["50g white granulated sugar", "50g water"],
      "Topping": ["Extra kataifi dough", "Melted butter"]
    },
    instructions: ["Mix dry ingredients (flour, baking powder, baking soda, salt) together.", "Cream butter and sugar until pale.", "Add kataifi dough to butter mixture; beat until combined.", "Add egg and vanilla; mix thoroughly.", "Fold in dry ingredients on low speed.", "Refrigerate dough for 8-10 hours.", "Freeze scoops of cream for 2 hours.", "Prepare sugar syrup by boiling sugar and water together, then simmering until thickened.", "Form dough balls; flatten and fill with frozen cream; seal the dough around the filling.", "Bake at 180°C for 12 minutes.", "Top with buttered kataifi while warm.", "Drizzle sugar syrup before serving."],
    tips: ["Cookies are best served fresh as the kataifi loses crunchiness over time.", "Frozen filled dough balls keep for up to one month.", "Refrigerate the dough for the full 8-10 hours for the best cookie texture."]
  },
  {
    id: "lemon-berry-new-york-cheesecake",
    name: "Lemon & Berry New York Cheesecake",
    description: "The perfect summer cheesecake - it's light, refreshing, creamy, with an amazing balance of sweet and tangy. Requires overnight chilling, making it ideal for advance preparation.",
    category: "Cheesecakes",
    prepTime: "60 minutes",
    cookTime: "90 minutes",
    totalTime: "630 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop",
    ingredients: {
      "Biscuit Base": ["100g digestive biscuit (crushed into fine powder)", "50g butter (melted)", "1 tsp lemon zest"],
      "Cheesecake Layer": ["90g caster sugar", "1 tbsp lemon zest", "20g cornflour", "450g cream cheese (room temperature)", "30g sour cream (optional)", "1 egg", "15ml lemon juice", "150ml liquid whipping cream/heavy cream"],
      "Berry Coulis": ["150g frozen mixed berries", "40g granulated sugar", "1 tsp lemon zest", "1 tsp lemon juice"]
    },
    instructions: ["Preheat oven to 160°C.", "Combine crushed digestive biscuits with melted butter and lemon zest.", "Mix until texture resembles wet sand; add more butter if too dry.", "Press mixture into springform pan using back of spoon or flat glass, ensuring even coverage.", "Bake 10 minutes, then cool completely.", "Rub lemon zest into caster sugar using fingers to release oils for enhanced lemony flavor.", "Whisk in cornflour, then add cream cheese; beat 3-5 minutes until smooth and sugar dissolves.", "Add beaten egg, lemon juice, and vanilla; mix until combined.", "Pour in heavy cream and mix on low until incorporated; avoid overmixing to prevent air bubbles; tap bowl gently to release any remaining bubbles.", "Wrap springform pan exterior in foil and place in larger dish; pour batter over cooled base.", "Add boiling water to outer dish, filling halfway up cheesecake pan (avoid water entering pan interior).", "Bake 60-90 minutes until edges are set and center has slight wobble.", "Cool at room temperature for 2 hours, then refrigerate minimum 6 hours or overnight.", "Cook berries with sugar, lemon juice, and zest on high heat until bubbling.", "Lower heat and simmer 10 minutes until berries soften; mash them and let mixture reduce until slightly thick (thickens further upon cooling).", "Top chilled cheesecake with optional whipped cream, berry coulis, and extra lemon zest; serve cold."],
    tips: ["Rub lemon zest into sugar using fingers to release oils for enhanced lemony flavor.", "Avoid overmixing the batter to prevent air bubbles.", "Tap bowl gently to release any remaining bubbles before baking.", "Use a water bath to ensure even, gentle baking.", "The cheesecake needs minimum 6 hours or overnight refrigeration for best results."]
  },
  {
    id: "no-churn-mango-ice-cream-sandwiches",
    name: "No-Churn Mango Ice Cream Sandwiches",
    description: "Delicious, fresh, and creamy three-ingredient no-churn mango ice cream sandwiched between your favorite milk biscuits - the perfect quick and easy summer treat!",
    category: "Ice Cream",
    prepTime: "20 minutes",
    cookTime: "0 minutes",
    totalTime: "380 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1629385701021-04e28f7ec7d0?w=600&h=400&fit=crop",
    ingredients: {
      "Ice Cream": ["300 ml liquid whipping cream/heavy cream", "240 ml condensed milk", "180 grams fresh mango pulp (blended mango)", "20 grams extra mango pulp (for topping)"],
      "Assembly": ["170 grams Milk Bikis (or any biscuit of choice)"]
    },
    instructions: ["Whip cold liquid cream until medium-stiff peaks form - it should hold shape but remain soft enough to fold in other ingredients. Avoid over-whipping or under-whipping for optimal texture.", "Add condensed milk, mango pulp, and vanilla extract (if using). Whip on high speed for 2-4 minutes until thick and fully combined.", "Line a dish with parchment paper, leaving extra hanging over sides for easy removal once set.", "Arrange biscuits in a single layer on the bottom, smooth side down. Pour mango ice cream and spread evenly with an offset spatula.", "Drop spoonfuls of mango pulp on top and swirl through for added flavor. Smooth the surface and top with another biscuit layer, patterned side up.", "Freeze for at least 6-8 hours or overnight until completely set. Lift the slab out using parchment, slice along the biscuit lines, and enjoy."],
    tips: ["Whip cream to medium-stiff peaks - avoid over-whipping or under-whipping for optimal texture.", "Leave extra parchment hanging over sides for easy removal once set.", "Freeze for at least 6-8 hours or overnight until completely set."]
  },
  {
    id: "mango-lassi-milk-cake",
    name: "Mango Lassi Milk Cake",
    description: "Inspired by the classic mango lassi, this cake turns everyone's favorite summer drink into a delicious, refreshing cake perfect for mango season.",
    category: "Cakes",
    prepTime: "40 minutes",
    cookTime: "20 minutes",
    totalTime: "300 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=400&fit=crop",
    ingredients: {
      "Cake Sponge": ["4 eggs (separated)", "70 grams granulated sugar (divided in two)", "1 tsp vanilla extract", "80 grams all-purpose flour"],
      "Mango Lassi Milk Topping": ["300 grams fresh mangoes or mango pulp (approximately 3 medium mangoes)", "250-300 ml condensed milk", "250 ml Laban (drinking yoghurt) or 125 grams regular yogurt", "200 ml milk", "1/4 tsp salt", "1/2 tsp cardamom powder (optional)"],
      "Whipped Cream Topping": ["100 ml liquid whipping cream", "20 grams icing sugar", "1 tsp vanilla extract", "100 grams fresh mangoes (chopped)", "10 grams chopped pistachios (optional)"]
    },
    instructions: ["Separate egg whites and yolks into different bowls. Add half the sugar to each, plus vanilla to yolks to mellow eggy flavor.", "Whip egg whites on high until fluffy with medium-stiff peaks that hold shape but remain smooth. Keep whisk and bowl completely clean.", "Whip yolk mixture until pale, thick, and creamy (3-5 minutes). Batter should fall in smooth ribbon when lifted.", "Gently fold whipped whites and flour into yolk mixture in alternating additions across three rounds, maintaining air since no leavening agents are used. Stop when no visible streaks remain.", "Transfer batter to greased 6-inch round pan and bake at 170°C (340°F) for approximately 20 minutes until skewer inserted in center comes out clean.", "Combine ripe mango chunks, laban or yogurt, regular milk, salt, and cardamom (if using) in blender. Blend until smooth and pourable. Add more milk if mixture is too thick.", "Laban (thin, drinkable yogurt from Middle Eastern stores) is ideal. If unavailable, substitute half the amount of regular yogurt and increase milk to adjust consistency. Taste and adjust preferences.", "When cake finishes baking, poke holes throughout using toothpick. Pour mango lassi milk generously over warm cake, reserving some to serve on the side.", "Let cake rest at room temperature for about 30 minutes to absorb milk, then refrigerate minimum 4-6 hours or overnight for best results.", "Whip whipping cream, icing sugar, and vanilla until stiff peaks form.", "Just before serving, spread whipped cream layer over top and finish with generous fresh mango chunks and chopped pistachios. Serve chilled with extra mango milk on the side."],
    tips: ["Using Laban versus regular yogurt requires adjustment: halve regular yogurt quantity and increase milk accordingly.", "Taste the mango mixture and customize sweetness based on mango ripeness.", "The lightness of the sponge depends entirely on maintaining whipped air, as no chemical leavening is used.", "Overnight refrigeration yields optimal flavor development."]
  },
  {
    id: "lemon-gulkand-strawberry-cake",
    name: "Lemon Gulkand Strawberry Cake",
    description: "Inspired by the classic Victoria Sponge Cake, this Lemon Gulkand Cake is made with super soft genoise sponge layers and filled with light and airy whipped cream and a strawberry and gulkand jam.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "40 minutes",
    totalTime: "160 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Genoise Cake Sponge": ["8 eggs", "200 grams caster sugar", "2 tsp lemon zest", "200 grams all-purpose flour", "1/2 tsp salt", "120 grams unsalted butter (melted)", "1 tsp vanilla essence"],
      "Strawberry Gulkand Jam": ["100 grams gulkand", "100 grams strawberries (fresh or frozen)", "1 tsp lemon zest", "30 ml lemon juice", "50 grams granulated white sugar", "Pinch of sea salt"],
      "Whipped Cream": ["200 ml liquid whipping cream", "35 grams icing sugar"]
    },
    instructions: ["Preheat oven to 170°C using a pan with removable base (springform or pastry ring). Avoid greasing as it affects rise.", "In heatproof bowl, combine eggs, caster sugar, and lemon zest; mix with hand whisk until incorporated.", "Create double boiler with saucepan of boiling water; position bowl on top without touching water.", "Lower heat to gentle simmer and whisk continuously for 3-5 minutes until sugar dissolves.", "Remove from heat and beat on high speed using electric/stand mixer with whisk attachment for 7-9 minutes until batter becomes pale and triples in volume.", "Sift flour and salt together three times to maintain lightness.", "Fold flour mixture into batter in three batches using silicone spatula, being careful not to deflate.", "Mix cooled melted butter with vanilla extract and fold gently into batter until combined.", "Pour batter into pan and bake 20-30 minutes until toothpick inserted in center comes out clean.", "Allow cake to cool completely before slicing into layers.", "Wrap cooled cake layers in cling film until ready to assemble.", "Combine strawberries, gulkand, sugar, lemon zest, and lemon juice in mixing bowl.", "Let sit for approximately 30 minutes so strawberries release their juices.", "Transfer mixture to saucepan (reserving some liquid) and cook on low heat for 10-15 minutes.", "Stir occasionally until strawberries break down and form jam-like consistency.", "Allow jam to cool completely before using.", "Whip liquid whipping cream with icing sugar until stiff peaks form; transfer portion to piping bag with 1/2-inch opening.", "Spread small dollop of whipped cream on cake board or serving plate to secure bottom layer; place first cake layer on top.", "Drizzle small amount of reserved strawberry liquid over cake layer, spreading evenly to keep moist without making soggy.", "Spread layer of whipped cream over cake, then pipe border around edges using piping bag to prevent jam seepage.", "Add 2-3 teaspoons cooled jam to center of cake layer and spread evenly.", "Place next layer on top and repeat process for all remaining layers.", "Once all layers stacked, frost entire cake with whipped cream (semi-naked rustic finish optional).", "Drizzle reserved strawberry liquid over top for extra flavor before serving."],
    tips: ["The double boiler method for warming eggs is crucial to avoid scrambling while dissolving sugar.", "Whisking incorporates air which makes the cake rise properly since there is no chemical leavening.", "Avoid greasing the pan as it affects the rise of the genoise.", "Sift flour three times to maintain lightness.", "Pipe a whipped cream border around edges to prevent jam seepage."]
  },
  {
    id: "matilda-cake",
    name: "Matilda Cake",
    description: "Inspired by Dubai's ultra-famous Matilda cake, this recipe makes the ultimate chocolate cake with fudgy layers, a rich dark chocolate ganache filling, and a milk chocolate ganache poured on top for a little drama.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    totalTime: "90 minutes",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Chocolate Cake": ["125 ml full-fat milk", "1 tbsp vinegar", "120 grams all-purpose flour", "100 grams white granulated sugar", "100 grams packed brown sugar", "1 tsp baking powder", "3/4 tsp baking soda", "38 grams cocoa powder", "1/2 tsp salt", "1 tsp coffee powder", "1 egg", "60 ml neutral oil", "1 tsp vanilla essence", "125 ml boiling water"],
      "Dark Chocolate Ganache Filling": ["200 grams dark chocolate", "200 ml liquid whipping cream"],
      "Milk Chocolate Ganache Topping": ["150 ml milk chocolate", "300 ml liquid whipping cream", "Chocolate flakes (optional, for assembly)"]
    },
    instructions: ["Preheat oven to 170°C. Grease cake pans with butter and dust with flour to prevent sticking.", "Combine vinegar with milk; let rest 10 minutes to create buttermilk.", "In a bowl, combine dry ingredients: flour, baking powder, baking soda, cocoa powder, and salt using a whisk.", "Add granulated sugar, brown sugar, egg, buttermilk, oil, and vanilla extract to dry ingredients; mix until combined.", "Gradually pour boiling water into batter while whisking until fully combined.", "Pour batter into cake pans and bake 20 minutes or until a toothpick test comes out clean. Cool before assembling.", "Make dark chocolate ganache: heat cream until nearly boiling, pour over dark chocolate in heatproof bowl. Let sit one minute, then whisk until fully melted and combined.", "Make milk chocolate ganache following the same procedure as dark chocolate ganache.", "Place first cake layer on serving plate or cake board. Spread thick, even layer of dark chocolate ganache on top, smoothing to edges.", "Add second cake layer and repeat ganache spreading between each layer. Finish with generous dark chocolate ganache coating on top.", "For the pull-up effect, wrap cake sides tightly with acetate sheet, overlapping edges slightly. Secure with tape, forming snug cylinder. Extend sheet higher than cake to hold ganache.", "Before serving, warm milk chocolate ganache until smooth and pourable. Pour generously over cake top with chocolate flakes sprinkle. Hold acetate from both sides and pull up, letting ganache flow toward edges. Work quickly as ganache may set if cake is cold.", "Alternatively, pour ganache on top for similar effect."],
    tips: ["Let vinegar and milk rest 10 minutes to properly create buttermilk.", "Work quickly when pulling up the acetate sheet as ganache may set if the cake is cold.", "Grease cake pans with butter and dust with flour to prevent sticking."]
  },
  {
    id: "masala-cinnamon-rolls",
    name: "Masala Cinnamon Rolls",
    description: "These masala cinnamon rolls give the classic American dessert a South-Asian twist with a super flavorful spiced filling inside the softest rolls topped with a delicious cream cheese frosting.",
    category: "Pastries",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "240 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Dough": ["92g granulated white sugar", "80g unsalted butter (softened)", "7g salt", "1 large egg", "454g all-purpose flour", "6g instant yeast", "255g full-fat milk (lukewarm)"],
      "Masala Cinnamon Filling": ["1 large cinnamon stick", "6-8 cardamom pods (deseeded)", "5-6 cloves", "100g packed jaggery/brown sugar", "50g ghee (room temperature)", "1 tsp grated ginger", "1/4 tsp sea salt"],
      "Cream Cheese Frosting": ["120g cream cheese", "55g unsalted butter (softened)", "120g powdered sugar", "2 tsp vanilla essence"]
    },
    instructions: ["Cream butter and sugar together until smooth and fluffy.", "Add egg and mix until fully combined.", "Gradually incorporate flour, warm milk, and instant yeast using a wooden spoon.", "Knead by hand or with stand mixer until soft and elastic (20 minutes by hand, 10 minutes by machine).", "Oil a bowl, place dough inside, coat with oil, cover with cling wrap.", "Let rise 1.5-2 hours until doubled in size.", "For warm proofing, heat empty microwave for one minute and place covered dough inside.", "Grind cinnamon stick, cardamom pods, and cloves into fine powder.", "Combine with room-temperature ghee, grated ginger, and sea salt to form spreadable paste.", "Punch down doubled dough, transfer to floured surface.", "Roll into rectangle, spread filling layer over dough.", "Roll horizontally from closest side, tucking tightly.", "Use floss instead of knife: mark portions, slide floss under dough, cross ends to cut cleanly.", "Arrange rolls in baking tray, cover loosely with cling wrap.", "Rise 1.5-2 hours until doubled (or refrigerate up to two days).", "Preheat oven to 170°C.", "Bake 20-25 minutes until cooked but not browned.", "Whip butter until soft, add room-temperature cream cheese, icing sugar, and vanilla.", "Cool rolls 5 minutes, spread frosting generously while warm."],
    tips: ["For warm proofing, heat empty microwave for one minute and place covered dough inside.", "Use floss instead of knife to cut rolls cleanly.", "Rolls can be refrigerated up to two days before baking.", "Spread frosting while rolls are still warm for best results.", "Bake until cooked but not browned for softest texture."]
  },
  {
    id: "carrot-cake-with-blueberry-jam-salted-caramel-crumble",
    name: "Carrot Cake with Blueberry Jam, Salted Caramel & Crumble",
    description: "Moist carrot cake layers layered with salted caramel sauce, homemade blueberry jam, crispy crumble, and cream cheese frosting for a multi-component cake with complementary flavors and textures.",
    category: "Cakes",
    prepTime: "120 minutes",
    cookTime: "60 minutes",
    totalTime: "210 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop",
    ingredients: {
      "Carrot Cake": ["160g all-purpose flour", "2 tsp baking powder", "1 tsp cinnamon powder", "1/2 tsp nutmeg powder", "1/2 tsp salt", "190 ml vegetable oil", "80 ml full-fat milk", "1 tsp vanilla extract", "3 eggs", "160g brown sugar", "90g grated carrots", "25 ml water"],
      "Salted Caramel Sauce": ["100g white granulated sugar", "25 ml water", "90 ml liquid whipping cream", "25g unsalted butter", "1/2 tsp sea salt"],
      "Blueberry Jam": ["100g blackberries (fresh or frozen)", "20g brown sugar", "1/2 lemon's juice"],
      "Crumble": ["60g all-purpose flour", "30g butter", "30g white granulated sugar"],
      "Cream Cheese Frosting": ["300g cream cheese (room temperature)", "150g butter (softened)", "100g powdered sugar"]
    },
    instructions: ["Preheat oven to 180°C; grease and flour baking pan.", "Grate carrots and squeeze out excess liquid before measuring.", "Whisk dry ingredients: flour, baking powder, cinnamon, nutmeg, salt.", "Combine liquid ingredients: oil, milk, vanilla extract.", "Beat eggs 3-5 minutes until pale and fluffy.", "Gradually add brown sugar; whisk another 3-5 minutes.", "Pour liquid ingredients slowly on low speed.", "Fold in dry ingredients in three parts.", "Fold in squeezed carrots until no lumps remain.", "Pour into pan; bake 20-25 minutes until toothpick comes clean.", "Combine sugar and water without stirring; swirl pan gently to distribute.", "Cook on medium heat, swirling occasionally, until deep amber.", "Carefully add warm cream and whisk until blended.", "Cook 1-2 minutes, then add butter and whisk 1-2 minutes.", "Remove from heat; stir in salt.", "Cool slightly and blend with stick or regular blender for smooth texture.", "Combine blackberries, brown sugar, lemon zest, and lemon juice.", "Cook on high heat until boiling, then lower heat.", "Cook 5-10 minutes, crushing berries as they soften.", "Cool completely before using.", "Preheat oven to 170°C; line baking tray with parchment.", "Mix flour and sugar; rub in butter cubes until wet-sand texture forms.", "Spread on baking sheet; bake 10 minutes until golden brown.", "Stir 2-3 times during baking for even browning.", "Cool completely before using.", "Whisk room-temperature butter 2-3 minutes until light and whipped.", "Separately whisk room-temperature cream cheese 2-3 minutes until smooth.", "Gradually add icing sugar to butter; mix until fluffy.", "Add whisked cream cheese; mix gently until just combined (avoid overmixing).", "Place first cake layer on stand; spread even frosting layer, smooth to edges.", "Drizzle thin caramel layer, then carefully spread jam without mixing.", "Sprinkle crumble handful over jam.", "Repeat layering for all layers.", "Top final layer with frosting, caramel drizzle, jam, or crumble as desired.", "Chill 20-30 minutes before serving for cleaner slices."],
    tips: ["Squeeze grated carrots thoroughly to prevent excess moisture, which could cause cake to sink.", "Use room-temperature ingredients and whisk butter and cream cheese separately to prevent frosting from splitting.", "Don't stir caramel with spoon; swirl pan instead to avoid crystallization.", "Use a wet pastry brush to sweep away caramel crystals on pan sides.", "Blend cooled caramel for smoother, glossier texture.", "Stir crumble 2-3 times during baking for even browning.", "Avoid overmixing cream cheese frosting to prevent splitting."]
  },
  {
    id: "hide-seek-chocolate-ice-cream-sandwiches",
    name: "Hide & Seek Chocolate Ice Cream Sandwiches",
    description: "Delicious, creamy, homemade no-churn chocolate ice cream with crispy chocolate bits sandwiched between Hide & Seek biscuits.",
    category: "Ice Cream",
    prepTime: "30 minutes",
    cookTime: "0 minutes",
    totalTime: "510 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=400&fit=crop",
    ingredients: {
      "Chocolate Ice Cream": ["300 ml liquid whipping cream/heavy cream", "240 ml condensed milk", "15 grams cocoa powder (sifted)", "50 grams dark chocolate (melted)"],
      "Assembly": ["3 packets Hide & Seek biscuits", "75 grams dark chocolate (melted, for dipping - optional)", "Sea salt (optional)"]
    },
    instructions: ["Whip cream to medium peaks in a large bowl without over-mixing.", "Add condensed milk and sifted cocoa powder; whip until fully combined and stable.", "Drizzle melted chocolate on top, swirl gently, wait 5 minutes for setting, then fold once more to distribute crispy chocolate bits evenly.", "Layer biscuits face-down in a lined pan, spread ice cream mixture evenly, top with another biscuit layer face-up, then freeze minimum 8 hours.", "Remove from pan and slice along biscuits into individual sandwiches.", "Optional: Dip sandwich ends in melted chocolate and sprinkle sea salt; let set."],
    tips: ["Do not over-whip the cream - medium peaks are ideal.", "Wait 5 minutes after drizzling melted chocolate before folding to create crispy chocolate bits.", "Freeze for minimum 8 hours or overnight for best results."]
  },
  {
    id: "no-churn-jimjam-ice-cream",
    name: "No-Churn JimJam Ice Cream",
    description: "Simple, no-churn ice cream made with only three ingredients topped with strawberry jam swirls and crushed JimJam biscuits.",
    category: "Ice Cream",
    prepTime: "20 minutes",
    cookTime: "0 minutes",
    totalTime: "500 minutes",
    servings: 6,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop",
    ingredients: {
      "Ice Cream Base": ["200 ml liquid whipping cream/heavy cream", "160 ml condensed milk", "50 grams cream cheese (softened)"],
      "Toppings": ["1 pack JimJam Biscuits (crushed)", "50 grams strawberry jam", "More JimJam Biscuits (for topping)"]
    },
    instructions: ["Whip cream in a large bowl until medium peaks form, avoiding over-whipping.", "Add condensed milk and cream cheese, then continue whipping until smooth, fully combined, and cream is stable.", "Gently fold crushed JimJam biscuits into ice cream using a silicone spatula.", "Pour mixture into a bowl, add strawberry jam swirls on top, and place additional JimJam biscuits on surface.", "Freeze for a minimum of 8 hours or overnight for best results."],
    tips: ["Avoid over-whipping the cream - medium peaks are ideal.", "Soften the cream cheese before adding for smooth incorporation.", "Freeze for a minimum of 8 hours or overnight for best results."]
  },
  {
    id: "cinnamon-roll-cupcakes",
    name: "Cinnamon Roll Cupcakes",
    description: "All the deliciousness of a cinnamon roll in just 30 minutes! Soft vanilla cake with a cinnamon brown sugar swirl and cream cheese frosting.",
    category: "Cupcakes",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "50 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&h=400&fit=crop",
    ingredients: {
      "Cinnamon Roll Filling": ["113g butter (room temperature)", "100g brown sugar", "10g flour", "12g cinnamon powder", "1/4 tsp sea salt"],
      "Vanilla Cupcakes": ["170g unsalted butter (room temperature)", "170g caster sugar", "2 tsp vanilla paste/essence", "3 eggs", "150g all-purpose flour", "20g corn flour (or extra flour)", "2 tsp baking powder", "1/2 tsp salt"],
      "Cream Cheese Frosting": ["200g cream cheese (room temperature)", "100g unsalted butter (room temperature)", "250g icing sugar", "1 tsp vanilla essence"]
    },
    instructions: ["Mix room-temperature butter until soft but not melted.", "Combine brown sugar, cinnamon powder, and sea salt; mix thoroughly.", "Transfer mixture into piping bag or zip-lock bag; set aside.", "Preheat oven to 170°C; line cupcake tray with liners.", "Beat butter and caster sugar 3-5 minutes until pale and fluffy.", "Add eggs and vanilla; beat 2-3 minutes until smooth.", "Fold in flour, baking powder, cornflour, and salt gently.", "Fill liners halfway with batter.", "Pipe cinnamon filling swirl into each cupcake center.", "Bake 20-25 minutes; cool completely.", "Beat room-temperature cream cheese and butter until smooth.", "Add icing sugar in three parts, mixing well after each.", "Stir in vanilla essence; whisk until fluffy.", "Refrigerate 30-60 minutes if too soft.", "Frost cooled cupcakes; sprinkle cinnamon on top."],
    tips: ["Make sure the butter isn't too cold, or it won't cream properly.", "Avoid overmixing batter to maintain tenderness.", "Refrigerate frosting 30-60 minutes if too soft to pipe.", "Use room-temperature cream cheese and butter for smooth frosting."]
  },
  {
    id: "strawberry-kaju-katli-tart",
    name: "Strawberry Kaju Katli Tart",
    description: "A fusion dessert combining crisp shortbread pastry with chewy Kaju Katli and topped with rose, cardamom, and lemon-flavored macerated strawberries.",
    category: "Tarts",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "120 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1587536849024-daaa4a417b16?w=600&h=400&fit=crop",
    ingredients: {
      "Shortcrust Pastry": ["130g unsalted butter (softened)", "100g caster sugar", "1 egg", "250g all-purpose flour"],
      "Kaju Katli": ["200g unsalted cashews", "90ml water", "150g white granulated sugar", "1 tsp rose water", "1/2 tsp cardamom powder", "2 tsp ghee"],
      "Macerated Strawberries": ["200g frozen or fresh strawberries", "30g granulated white sugar", "1/2 tsp lemon zest", "1 tsp rose water", "1/2 tsp cardamom powder"],
      "Garnish": ["100g fresh strawberries", "Gold or silver foil"]
    },
    instructions: ["Cream butter and sugar at medium speed for 3-5 minutes.", "Add eggs, whip on medium-high until fully incorporated.", "Gradually add flour on low speed; avoid over-mixing.", "Roll dough between parchment to 2mm thickness; chill 15 minutes.", "Shape around tart ring; chill another 15 minutes.", "Poke holes with fork; add parchment and baking beans.", "Bake at 160°C for 15-20 minutes until golden.", "Grind cashews into powder without releasing oils.", "Boil sugar and water without stirring; add cashew powder.", "Mix constantly for 2-3 minutes as mixture thickens.", "Add rose water, cardamom powder, and ghee; cook 5-6 minutes until mixture releases from pan sides.", "Cool 2 minutes, then knead until smooth dough forms.", "Roll between parchment before setting.", "Cut circle slightly smaller than tart; place inside.", "Combine strawberries, sugar, lemon zest, rose water, and cardamom powder.", "Chill minimum 30 minutes until strawberries release juices.", "Top kaju katli layer with macerated berries; add fresh strawberries and foil; serve cold."],
    tips: ["Grind cashews carefully without releasing oils to maintain proper texture.", "Do not stir the sugar water when boiling for the kaju katli.", "Chill the pastry between steps to prevent shrinking.", "Cut the kaju katli circle slightly smaller than the tart for a perfect fit.", "Macerate strawberries for minimum 30 minutes for best flavor."]
  },
  {
    id: "rooh-afza-strawberry-pancakes",
    name: "Rooh Afza & Strawberry Pancakes",
    description: "Fluffy buttermilk pancakes layered with creamy Rooh Afza whipped cream and strawberries - a simple recipe that will take your regular breakfast to another level.",
    category: "Pancakes",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    totalTime: "30 minutes",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
    ingredients: {
      "Pancake Batter": ["120 grams flour", "30 grams sugar", "10 grams baking powder", "1/2 teaspoon salt", "150 ml buttermilk (or regular milk mixed with 1 tsp vinegar)", "1 egg", "1 teaspoon vanilla essence", "30 grams unsalted butter, melted"],
      "Rooh Afza Whipped Cream": ["120 ml liquid whipping cream/heavy cream", "30-50 ml Rooh Afza syrup", "1/2 teaspoon cardamom powder (optional)", "1/4 teaspoon salt"],
      "Assembly": ["100 grams strawberries (sliced or chopped)"]
    },
    instructions: ["Mix flour, sugar, baking powder, and salt together using a hand whisk.", "Add buttermilk, egg, and vanilla essence; whisk until combined, then gradually incorporate melted butter while whisking until fully blended (slight lumpiness is acceptable).", "Heat pan on medium heat; pour two spoonfuls of batter and spread evenly; cook until top bubbles and bottom turns golden, then flip and cook 1-2 minutes more (adjust heat as needed).", "Prepare whipped cream: combine liquid whipping cream, Rooh Afza, cardamom powder (if using), and salt; whisk until fluffy with stiff peaks.", "Once pancakes cool slightly, layer them with whipped cream and strawberries; finish with additional cream, strawberries, and a Rooh Afza drizzle."],
    tips: ["Slight lumpiness in the batter is acceptable - do not overmix.", "Adjust heat as needed while cooking to prevent burning.", "If buttermilk is unavailable, mix regular milk with 1 tsp vinegar as a substitute."]
  },
  {
    id: "caramel-mocha-latte-cake",
    name: "Caramel Mocha Latte Cake",
    description: "Decadent chocolate cake layers filled with fluffy dalgona coffee whipped cream and salted caramel sauce for the ultimate coffee-lover's dessert.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "50 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=400&fit=crop",
    ingredients: {
      "Chocolate Cake": ["125 ml full-fat milk", "1 tbsp vinegar", "120g all-purpose flour", "100g white granulated sugar", "100g packed brown sugar", "1 tsp baking powder", "3/4 tsp baking soda", "38g cocoa powder", "1/2 tsp salt", "1 tsp coffee powder", "1 egg", "60 ml neutral oil", "1 tsp vanilla essence", "125 ml boiling water"],
      "Dalgona Coffee Whipped Cream": ["80g white granulated sugar", "12g coffee powder", "30-40 ml milk", "120 ml liquid whipping cream", "100g sugar"],
      "Salted Caramel Sauce": ["100g sugar", "45g unsalted butter", "60 ml liquid whipping cream/heavy cream", "1/2 tsp salt"]
    },
    instructions: ["Preheat oven to 180°C and prepare cake pans with butter and flour.", "Create buttermilk by adding vinegar to milk; let sit 10 minutes.", "Add oil, egg, and vanilla to buttermilk; whisk until combined.", "Mix flour, white sugar, brown sugar, baking powder, baking soda, salt.", "Combine liquid and dry ingredients.", "Mix cocoa powder and coffee powder with hot water separately.", "Pour chocolate mixture into batter and mix thoroughly.", "Bake for 20 minutes until toothpick comes clean; cool layers.", "Whip coffee powder, sugar, and milk on high speed for 5 minutes until fluffy.", "Whip liquid cream to medium peaks, then add dalgona mixture; whip to stiff peaks.", "Heat sugar on medium, stirring frequently until amber; add butter and whisk.", "Cook 1 minute, add cream while whisking carefully; simmer 1-2 minutes on low heat.", "Remove from heat, add salt; allow to cool and thicken.", "Layer first cake with thick dalgona cream and piped border to contain caramel.", "Add caramel sauce in center, place second layer; repeat process.", "Cover exterior with remaining whipped cream, pour remaining caramel on top; finish with piped whipped cream."],
    tips: ["Let vinegar and milk sit for 10 minutes to properly create buttermilk.", "Mix cocoa and coffee with hot water separately before adding to batter for better incorporation.", "Pipe a border of whipped cream to contain the caramel sauce between layers.", "Stir sugar frequently when making caramel to prevent burning."]
  },
  {
    id: "pineapple-coconut-souffle",
    name: "Pineapple & Coconut Souffle",
    description: "A refreshing dessert made with a creamy pineapple and coconut mousse topped with pineapple jelly - the perfect way to cool down.",
    category: "Desserts",
    prepTime: "45 minutes",
    cookTime: "0 minutes",
    totalTime: "525 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&h=400&fit=crop",
    ingredients: {
      "Pineapple & Coconut Mousse": ["150 grams white chocolate", "70 ml coconut milk", "70 ml coconut cream", "130 grams canned pineapples (for puree)", "130 grams coconut cream (for whipping)", "70 grams liquid whipping cream", "200 grams canned pineapples (drained)"],
      "Pineapple Jelly": ["10 grams gelatin powder", "50 grams ice-cold water (for blooming gelatin)", "150 grams pineapple juice", "Sweetened whipped cream (optional for topping)"]
    },
    instructions: ["Drain canned pineapples and puree until smooth.", "Heat coconut milk, coconut cream, and pineapple puree to boiling; pour over chocolate; whisk until incorporated; cool to room temperature.", "Whip remaining coconut cream and whipping cream to medium peaks.", "Fold chocolate mixture into whipped cream gently; fold in chopped pineapples (100 grams).", "Layer pineapple slices in bowls; top with mousse; chill 6-8 hours or overnight.", "Bloom gelatin in ice-cold water; let set 15 minutes.", "Add bloomed gelatin to boiling pineapple juice; whisk until melted; chill 2-4 hours until set; cut into pieces.", "Top chilled souffle with whipped cream and pineapple jelly; serve cold."],
    tips: ["Bloom gelatin in ice-cold water for 15 minutes before using.", "Cool the chocolate mixture to room temperature before folding into whipped cream.", "Chill the mousse for 6-8 hours or overnight for best results.", "Serve cold for the most refreshing experience."]
  },
  {
    id: "labneh-honey-cheese-pie",
    name: "Labneh & Honey Cheese Pie",
    description: "A staple Middle-Eastern dessert, this Labneh, Cheese, and Honey Pie gives the perfect combination of sweet and salty in a crunchy, flaky pie crust.",
    category: "Pastries",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    totalTime: "120 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    ingredients: {
      "Pastry Dough": ["485g all-purpose flour", "1 tsp salt", "30g white granulated sugar", "340g unsalted butter, frozen and cut into squares", "100ml water with extra ice", "100ml apple cider vinegar"],
      "Filling": ["200g full-fat labneh", "100g mozzarella cheese (optional)", "150g honey (adjust to preference)", "1 egg for egg wash"]
    },
    instructions: ["Mix flour, salt, and sugar; incorporate cold butter until flat, irregular strips form.", "Gradually add ice water and vinegar mixture until dough holds together.", "Create faux lamination by stacking and pressing dough sections three times.", "Divide dough, wrap tightly, refrigerate minimum one hour (freeze extra up to 3 months).", "Preheat oven to 180°C; roll pastry between baking sheets to 2-3mm thickness.", "Layer filling: labneh, honey, mozzarella, honey; fold edges inward, seal corners.", "Apply egg wash, sprinkle sugar, bake until crust is golden and filling bubbles."],
    tips: ["Enjoy warm for best results.", "Adjust oven heat if bottom darkens before top cooks through."]
  },
  {
    id: "butter-biscuit-mousse-cake",
    name: "Butter Biscuit Mousse Cake",
    description: "Made with the infamous butter biscuits, this mousse cake features layers of a tres leches-soaked sponge, caramel sauce, peanut praline, and butter biscuit mousse.",
    category: "Cakes",
    prepTime: "120 minutes",
    cookTime: "30 minutes",
    totalTime: "390 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12571?w=600&h=400&fit=crop",
    ingredients: {
      "Tres Leches Cake Layer": ["2 eggs (whites and yolks separated)", "35g white granulated sugar", "40g all-purpose flour", "40ml liquid whipping cream", "70ml condensed milk", "25ml evaporated milk", "25ml water"],
      "Salted Caramel Sauce": ["100g white granulated sugar", "90ml liquid whipping cream", "25g unsalted butter", "1/2 tsp sea salt"],
      "Peanut Praline": ["115g caster/granulated sugar", "35g water", "85g whole unsalted peanuts"],
      "Butter Biscuit Mousse": ["150g white chocolate", "100ml full-fat milk", "80ml liquid whipping cream", "100g butter biscuits (plain varieties only)", "200ml liquid whipping cream (for whipping)", "Additional butter biscuits for topping"]
    },
    instructions: ["Separate eggs; whip whites to stiff peaks with half the sugar, beat yolks with remaining sugar until pale.", "Fold whites and flour into yolks in alternating stages; pour into lined pan and bake at 170°C for approximately 15 minutes.", "Mix liquid whipping cream, condensed milk, and evaporated milk; pour over warm cake and let soak.", "Make salted caramel by cooking sugar to amber, adding cream, butter, and salt; blend until smooth.", "Make peanut praline by caramelizing sugar and water, stirring in peanuts, pouring onto parchment to cool, then crushing.", "Heat milk and cream, pour over chopped white chocolate and crushed biscuits; stir until smooth and cool to room temperature.", "Whip cream to medium-stiff peaks; fold cooled biscuit ganache into whipped cream.", "Assemble: place soaked sponge in mould, add caramel sauce, sprinkle praline, pour mousse on top.", "Chill minimum 4 hours before decorating the top with biscuits arranged to resemble the original tin."],
    tips: ["Chill the completed cake minimum 4 hours before decorating.", "Arrange biscuits on top to resemble the original tin for a nostalgic presentation."]
  },
  {
    id: "pan-mousse-cake-pan-gulkand-trifle",
    name: "Pan Mousse Cake | Pan & Gulkand Trifle",
    description: "Inspired by the classic meetha pan, these pastries are layered with a betel leaf white chocolate mousse, gulkand jam center, a crunchy sweet and salty fennel seed mixture, and a soft vanilla cake.",
    category: "Desserts",
    prepTime: "90 minutes",
    cookTime: "30 minutes",
    totalTime: "360 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=400&fit=crop",
    ingredients: {
      "Vanilla Cake Base": ["115g unsalted butter (room temperature)", "115g caster sugar", "1 tsp vanilla paste/essence", "2 eggs", "100g all-purpose flour", "10g cornflour", "1.5 tsp baking powder", "1/4 tsp salt"],
      "Betel Leaf Mousse": ["100g betel leaves", "100ml full-fat milk", "100ml liquid whipping cream", "200g white chocolate", "6g gelatin powder (mixed with 30ml ice-cold water)", "250ml liquid whipping cream (for whipping)"],
      "Assembly & Filling": ["100g gulkand (rose jam)", "50g mukhwas (sweet and salty fennel seeds mixture)"],
      "White Chocolate & Fennel Shell": ["200g white chocolate", "50g sweet fennel seeds (meethi saunf)"]
    },
    instructions: ["Preheat oven to 170°C. Combine flour, cornflour, baking powder, and salt.", "Cream softened butter and sugar until pale and fluffy (3-5 minutes). Add eggs and vanilla extract, mix until incorporated.", "Fold in dry mixture on low speed until combined. Pour into lined baking tray, spread evenly, bake 15 minutes until toothpick comes clean.", "Cool cake, cut rounds using cookie cutter matching mould size. Chill wrapped pieces until assembly.", "Grind betel leaves into paste with splash of milk. Heat milk, liquid whipping cream, and betel paste for 10 minutes without boiling. Strain mixture.", "Pour hot infused liquid over chopped white chocolate, let sit one minute. Whisk until smooth.", "Mix in gelatin while warm until dissolved, cool to room temperature.", "Whip cream to soft-medium peaks. Fold white chocolate mixture into whipped cream in batches.", "Freeze teaspoons of gulkand for one hour.", "Transfer mousse to piping bag, fill mould halfway. Add frozen jam disc, press gently, fill three-quarters with mousse.", "Sprinkle sweet-salty fennel on top, smooth out. Top with chilled cake round, press lightly.", "Freeze 4-6 hours until set. For trifle-style: layer cake at bottom in glasses, then mousse, jam, and fennel.", "Melt white chocolate, stir in coconut oil, then mix in sweet fennel seeds.", "Unmould mousse, dip into chocolate in one smooth motion. Tap gently to remove excess, set aside to firm.", "Garnish with whipped cream swirl and maraschino cherry, serve chilled."],
    tips: ["Alternatively use store-bought vanilla pound cake for the base.", "Ensure chocolate is melted but not hot before coating.", "For trifle-style, refrigerate 2-3 hours instead of freezing."]
  },
  {
    id: "sticky-toffee-pudding-pancakes",
    name: "Sticky Toffee Pudding Pancakes",
    description: "Soft, super fluffy pancakes inspired by the classic British sticky toffee pudding, layered with a delicious and simple butterscotch sauce, ideal for weekend breakfast or brunch.",
    category: "Pancakes",
    prepTime: "30 minutes",
    cookTime: "3 minutes",
    totalTime: "33 minutes",
    servings: 6,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=600&h=400&fit=crop",
    ingredients: {
      "Pancake Batter": ["200g all-purpose flour", "30g brown sugar", "10g baking powder", "2.5g baking soda", "1 tsp cinnamon powder", "240ml buttermilk (or milk with vinegar)", "1 egg", "40g melted butter", "1 tsp vanilla essence", "75g date paste"],
      "Butterscotch Sauce": ["50g unsalted butter", "90g brown sugar", "95ml heavy cream", "Sea salt (pinch)"],
      "Toppings": ["Sweetened whipped cream", "Chopped nuts (optional)"]
    },
    instructions: ["Mix dry ingredients (flour, brown sugar, baking powder, baking soda, cinnamon, salt) with a whisk.", "Combine wet ingredients (buttermilk, egg, vanilla, date paste) until smooth; stir in melted butter.", "Gently fold wet mixture into dry ingredients — avoid overmixing to maintain fluffiness.", "Rest batter 15-30 minutes.", "Heat non-stick skillet on medium; cook 2-tablespoon portions until bubbles form and edges set; flip for 1-2 minutes.", "Heat butter, sugar, and cream until melted and smooth; simmer 2-3 minutes; add salt.", "Stack pancakes, drizzle sauce, top with whipped cream and nuts."],
    tips: ["Avoid overmixing the batter to maintain fluffiness.", "Rest the batter 15-30 minutes before cooking for best results."]
  },
  {
    id: "indian-candy-inspired-cookies",
    name: "Indian Candy-Inspired Cookies",
    description: "Thick, chewy, delicious cookies flavored with popular and nostalgic Indian candies including Dairy Milk Silk, 5 Star, Perk, Melody, Alpenlibe, and Gems.",
    category: "Cookies",
    prepTime: "60 minutes",
    cookTime: "20 minutes",
    totalTime: "440 minutes",
    servings: 18,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1625876981260-1f9372725bae?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["225g unsalted butter (room temperature)", "100g white granulated sugar", "200g packed brown sugar", "2 eggs", "1 tsp vanilla essence", "380g all-purpose flour", "1 tsp baking soda", "1 tsp baking powder", "1/2 tsp salt"],
      "Mix-Ins": ["80g 5 Star chocolate (chopped)", "120g Dairy Milk Silk (chopped)", "100g Perk chocolate (chopped)", "70g Melody (chopped)", "100g Gems chocolate", "50g Alpenliebe (chopped)", "50g milk or dark chocolate chips", "1 tsp sea salt"]
    },
    instructions: ["Preheat oven to 170°C; line baking tray with parchment.", "Cream butter and sugars for 3-5 minutes until fluffy.", "Add eggs and vanilla; beat 2 more minutes.", "Mix in flour, baking powder, baking soda, and salt on low speed.", "Divide dough into six bowls; fold different candies into each.", "Cover and refrigerate 6-24 hours (or freeze up to 3 months).", "Scoop 45-50g portions; roll into balls on parchment.", "Bake approximately 12 minutes until edges are golden.", "Shape cookies with cookie cutter rim while warm.", "Sprinkle sea salt; press extra candy chunks on top.", "Cool before serving; microwave 20 seconds to reheat."],
    tips: ["Refrigerate dough 6-24 hours for best texture and flavor development.", "Dough can be frozen up to 3 months.", "Microwave 20 seconds to reheat for a freshly-baked taste."]
  },
  {
    id: "no-bake-masala-chai-mousse-cake",
    name: "No-Bake Masala Chai Mousse Cake",
    description: "This Chai Mousse Cake requires no baking, comes together in 30 minutes, tastes absolutely delicious, and looks just as lovely.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "0 minutes",
    totalTime: "270 minutes",
    servings: 8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop",
    ingredients: {
      "Cake Rusk Base": ["100ml water", "100ml milk", "5-7 grams tea leaves", "5 grams sugar", "4 pods cardamom", "1 stick cinnamon", "200 grams cake rusk"],
      "Masala Chai Mousse": ["180ml full-fat milk", "165ml liquid whipping cream", "18-20 grams chai leaves", "40 grams sugar", "4-6 cardamom pods", "1 inch ginger", "1 cinnamon stick", "1/2 tsp chai masala powder (optional)", "225 grams white chocolate", "250ml liquid whipping cream"],
      "Topping": ["1 packet Parle-G biscuits"]
    },
    instructions: ["Brew chai by combining milk, water, tea leaves, sugar, cardamom, and cinnamon; simmer 5 minutes then strain.", "Dip each rusk into cooled chai for approximately 10 seconds per side; arrange in dish.", "Repeat until base is covered.", "Heat milk and cream, add tea leaves and spices; steep 5-8 minutes without boiling.", "Pour warm chai mixture over white chocolate; let sit one minute then stir until smooth.", "Whip heavy cream to medium-stiff peaks.", "Fold cooled chai ganache into whipped cream gently.", "Pour mousse over rusk layer; refrigerate minimum 4 hours or overnight.", "Top with Parle-G biscuits immediately before serving."],
    tips: ["Reduce steeping time if tea leaves tend to become bitter easily.", "Refrigerate minimum 4 hours or overnight for best results.", "Top with Parle-G biscuits immediately before serving to maintain crunch."]
  },
  {
    id: "rooh-afza-lemon-cheesecake",
    name: "Rooh Afza & Lemon Cheesecake",
    description: "A creamy, no-bake cheesecake layered with a crisp biscuit base and a punchy homemade lemon curd, featuring the iconic Rooh Afza syrup.",
    category: "Cheesecakes",
    prepTime: "60 minutes",
    cookTime: "15 minutes",
    totalTime: "435 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45adb?w=600&h=400&fit=crop",
    ingredients: {
      "Biscuit Base": ["200g digestive biscuits/graham crackers", "20g white sugar", "100g melted butter"],
      "Rooh Afza Cheesecake Layer": ["60g white granulated sugar", "1 tbsp lemon zest", "360g full-fat cream cheese", "130ml Rooh Afza syrup", "15ml lemon juice", "30g sour cream (or more cream cheese)", "170g liquid whipping cream"],
      "Lemon Curd": ["4 egg yolks", "140g white granulated sugar", "2 tbsp lemon zest", "100ml lemon juice", "90g unsalted butter", "100ml liquid whipping cream"],
      "Topping": ["30g icing sugar", "Gold foil (optional)"]
    },
    instructions: ["Combine crushed digestive biscuits with sugar and melted butter until evenly moistened.", "Transfer mixture into pan, pressing firmly to create solid base. Chill biscuit base for 10 minutes.", "Mix sugar and lemon zest, rubbing zest into sugar with fingertips.", "Beat cream cheese until smooth and lump-free.", "Pour in Rooh Afza syrup and lemon juice, whisk until incorporated.", "Whip liquid whipping cream separately to medium-stiff peaks.", "Gently fold whipped cream into cream cheese mixture in two parts.", "Spread cheesecake mixture over chilled biscuit base.", "Optionally add Rooh Afza drops on top and swirl lightly.", "Refrigerate 4-6 hours or overnight to set completely.", "Set up double boiler with water and heatproof bowl.", "Whisk egg yolks, caster sugar, lemon zest, and lemon juice together.", "Cook over simmering water for 8-10 minutes, stirring constantly.", "Remove from heat and mix in butter until smooth.", "Press cling film directly on curd surface and refrigerate 2+ hours.", "Whip liquid whipping cream with icing sugar until stiff peaks form.", "Spread lemon curd in center of set cheesecake.", "Pipe whipped cream on border. Finish with gold foil if desired and serve cold."],
    tips: ["Press cling film directly on curd surface to prevent a skin from forming.", "Refrigerate cheesecake 4-6 hours or overnight for best set.", "Serve cold for the best flavor and texture."]
  },
  {
    id: "falooda-milk-cake",
    name: "Falooda Milk Cake",
    description: "Inspired by the classic desi Falooda, this three-milk cake is made with a light and airy sponge topped with a homemade Kulfi mixture, whipped cream, Falooda noodles, and basil seeds.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "120 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop",
    ingredients: {
      "Homemade Kulfi": ["360ml full-fat milk", "75 grams sugar", "1 tablespoon khoya or milk powder", "180ml full-fat milk (to mix with cornflour)", "9 grams cornstarch/cornflour", "1/2 tsp cardamom powder", "50 grams thick cream (optional)"],
      "Three-Milk Mixture": ["250 grams homemade kulfi", "50 grams condensed milk", "200ml full-fat milk"],
      "Cake Sponge": ["4 eggs, separated into whites and yolks", "70 grams white granulated sugar", "1 tsp vanilla essence", "80 grams all-purpose flour"],
      "Topping & Assembly": ["200 grams liquid whipping cream", "50 grams icing sugar", "15 grams Falooda noodles", "1 liter hot water", "50ml Rooh Afza", "10 grams basil seeds soaked in water", "25 grams strawberries (chopped)"]
    },
    instructions: ["Boil milk on medium heat for 5 minutes, stirring continuously to prevent burning.", "Add sugar and milk solids, cooking another 5 minutes until thickened.", "Mix remaining milk with cornflour into a slurry; gradually add to pan on low heat while stirring. Add cardamom powder and cook 3-5 minutes.", "Add cream and cook 2 more minutes, then remove from heat.", "Add condensed milk and remaining milk to create the three-milk mixture.", "Preheat oven to 180°C. Prepare baking pan with parchment paper or greased butter and flour.", "Separate eggs; add half sugar to each bowl, vanilla in yolk bowl. Whip yolks until light and fluffy; whip whites to stiff peaks.", "Alternately fold egg white mixture and flour into yolk mixture in thirds, gently folding to preserve airiness.", "Transfer batter to prepared pan; bake 15-20 minutes until toothpick comes out clean.", "Immediately poke holes with fork; pour generous milk amount while cake is hot; let cool.", "Chill 4-6 hours or overnight.", "Whip cream with icing sugar until stiff peaks form.", "Soak noodles in hot water mixed with Rooh Afza for at least one hour until soft.", "Top cooled cake with whipped cream, Falooda noodles, soaked basil seeds, and chopped strawberries.", "Serve cold with reserved kulfi milk mixture."],
    tips: ["Poke holes immediately while cake is still hot for maximum milk absorption.", "Chill 4-6 hours or overnight for the best texture.", "Soak Falooda noodles in Rooh Afza water for at least one hour until soft."]
  },
  {
    id: "indian-biscuit-inspired-cupcakes",
    name: "Indian Biscuit-Inspired Cupcakes",
    description: "These cupcakes are inspired by six classic Indian biscuits - JimJam, Parle-G, 50-50, Little Hearts, Bourbon, and Hide & Seek - each with a unique topping and filling.",
    category: "Cupcakes",
    prepTime: "180 minutes",
    cookTime: "30 minutes",
    totalTime: "240 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop",
    ingredients: {
      "Chocolate Cupcake Base": ["125ml full-fat milk", "1 tbsp vinegar", "120g all-purpose flour", "100g white granulated sugar", "100g packed brown sugar", "1 tsp baking powder", "3/4 tsp baking soda", "38g cocoa powder", "1/2 tsp salt", "1 tsp coffee powder", "1 egg", "60ml neutral oil", "1 tsp vanilla essence", "125ml boiling water"],
      "Vanilla Cupcake Base": ["250g all-purpose flour", "125g granulated white sugar", "10g baking powder", "1/4 tsp salt", "1 egg", "1 tsp vanilla essence", "75g butter (melted)"],
      "Bourbon Cupcakes": ["200g milk chocolate", "100ml liquid whipping cream", "1 packet Bourbon biscuits"],
      "Hide & Seek Cupcakes": ["100ml liquid whipping cream", "30g icing sugar", "20g cocoa powder", "20g milk chocolate (melted)", "1 packet Hide & Seek biscuits"],
      "JimJam Cupcakes": ["100ml liquid whipping cream", "30g icing sugar", "100g strawberry jam", "1 packet JimJam biscuits"],
      "Chai & Parle-G Cupcakes": ["100ml Indian chai (prepared to preference)", "100ml liquid whipping cream", "30g icing sugar", "1/2 tsp cardamom powder", "1/2 tsp cinnamon powder (or 1 tsp chai masala)", "1 packet Parle-G biscuits"],
      "50-50 Cupcakes": ["100ml liquid whipping cream", "30g icing sugar", "30g 50-50 biscuits (crushed finely)", "1 packet 50-50 biscuits"],
      "Little Hearts Cupcakes": ["25ml water", "100g white granulated sugar", "90ml liquid whipping cream", "25g unsalted butter", "1/2 tsp sea salt", "100ml liquid whipping cream (for topping)", "30g icing sugar", "1 packet Little Hearts biscuits"]
    },
    instructions: ["Chocolate base: Mix flour, cocoa powder, baking powder, baking soda, coffee powder, and salt. Add sugars, buttermilk, oil, and vanilla; stir until incorporated. Whisk in hot water until smooth.", "Place half a Bourbon biscuit or whole Hide & Seek biscuit in some liners. Fill liners 3/4 full. Bake at 175°C for 15 minutes; cool completely.", "Vanilla base: Whisk flour, baking powder, and salt. Add sugar, milk, egg, and vanilla; mix until just combined. Pour in melted butter; whisk until smooth.", "Add whole JimJam, 50-50, or Parle-G biscuit in liners. Fill 3/4 full; bake at 175°C for 10-15 minutes; cool completely.", "Bourbon: Pour hot cream over chopped milk chocolate with coffee powder; whisk smooth. Reserve some for filling; whip rest until fluffy. Fill cupcakes, pipe on top, garnish with Bourbon biscuit.", "Hide & Seek: Whip cream, icing sugar, and cocoa to medium-stiff peaks. Drizzle melted chocolate; chill, then whisk. Pipe onto cupcakes; top with biscuit.", "JimJam: Whip cream with icing sugar; swirl in jam without fully mixing. Cut hole in cupcake, fill with jam, pipe cream, top with biscuit.", "Chai & Parle-G: Poke holes in vanilla cupcake; pour 2-3 tablespoons sweetened chai over it. Whip cream with icing sugar, cardamom, and cinnamon. Pipe on top; garnish with Parle-G.", "50-50: Whip cream, icing sugar, and crushed 50-50 biscuits to medium-stiff peaks. Pipe onto cupcakes; top with biscuit.", "Little Hearts: Cook sugar and water to deep amber; add cream, cook 2 minutes; add butter and salt, blend smooth; cool. Whip cream and icing sugar. Fill cupcake with caramel, pipe cream, top with biscuit."],
    tips: ["Do not overbake the cupcakes; they should be just done when a toothpick comes out clean.", "Cool cupcakes completely before adding any toppings or fillings.", "For Chai & Parle-G cupcakes, pour the chai while the cupcake is still warm for better absorption."]
  },
  {
    id: "gajar-halwa-custard-cake",
    name: "Gajar Halwa Custard Cake",
    description: "Inspired by one of the most beloved South Asian desserts, this cake features a moist three-milk cake base, a gajar halwa-inspired filling, and a creamy custard topped with a caramel sugar shard.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "330 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&h=400&fit=crop",
    ingredients: {
      "Three Milk Cake": ["2 eggs (separated)", "1/2 tsp vanilla", "35g white granulated sugar", "40g all-purpose flour", "80ml liquid whipping cream", "180ml condensed milk", "50ml evaporated milk"],
      "Gajar Halwa Filling": ["250g shredded carrots", "2-3 cardamom pods", "150ml condensed milk", "1/2 tsp cinnamon powder", "1/2 tsp nutmeg powder", "3 tbsp ghee (clarified butter)"],
      "Custard": ["60g egg yolks (approximately 3)", "72g caster sugar", "30g cornflour", "300ml full-fat milk", "2 tsp vanilla essence", "30g unsalted butter"],
      "Sugar Shard": ["150g granulated white sugar", "30ml water"]
    },
    instructions: ["Preheat oven to 170°C; grease pan.", "Separate eggs; divide sugar between bowls.", "Whisk whites until fluffy with peaks; beat yolks until pale.", "Fold whites and flour into yolks in three alternating stages.", "Bake approximately 15 minutes until toothpick comes clean.", "Mix milk soak (whipping cream, condensed milk, evaporated milk); pour over warm cake; cool completely.", "Shred carrots finely; press out excess moisture.", "Heat ghee; add cardamom pods; cook carrots 5-10 minutes.", "Stir in condensed milk and spices; cook 10 minutes on low heat. Spread over cooled cake layer.", "Heat milk and vanilla until boiling.", "Whisk yolks, sugar, and cornflour until thick and pale.", "Temper eggs gradually with hot milk while whisking.", "Return mixture to pan; cook on low heat 3-5 minutes until thickened. Stir in butter.", "Pour custard over filling; chill 4-6 hours.", "Combine sugar and water; cook over low heat without stirring until caramelized.", "Pour caramelized sugar into mold; cool 20 minutes. Place atop set cake.", "Finish with piped whipped cream if desired."],
    tips: ["Press out excess moisture from shredded carrots for a better filling consistency.", "Chill 4-6 hours for the custard to set properly.", "Do not stir the sugar when making the sugar shard to avoid crystallization."]
  },
  {
    id: "desi-inspired-donuts",
    name: "Desi-Inspired Donuts",
    description: "South Asian-inspired donuts made with homemade brioche dough and filled with six different flavors: Rooh Afza cream, Chai and Parle-G, Rabdi, Mango Lassi, Gajar Halwa, and Gulkand.",
    category: "Doughnuts",
    prepTime: "120 minutes",
    cookTime: "60 minutes",
    totalTime: "240 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600&h=400&fit=crop",
    ingredients: {
      "Brioche Donuts": ["2 eggs", "50g caster sugar", "1 tablespoon salt", "10g instant yeast", "240ml warm milk", "170g melted butter", "560g all-purpose flour", "300ml vegetable oil for frying", "30g sugar + 10g cinnamon powder (for topping)"],
      "Rooh Afza Donuts": ["150ml liquid whipping cream", "40ml Rooh Afza syrup", "10ml extra Rooh Afza syrup for filling"],
      "Mango Lassi Donuts": ["150ml liquid whipping cream", "50g mango slices (fresh or frozen)", "30g plain full-fat yogurt"],
      "Rabdi Donuts": ["1 liter water", "85g milk powder", "125g white granulated sugar", "5g corn flour", "30g full-fat milk", "1/2 tsp cardamom powder"],
      "Gajar Halwa Donuts": ["125g carrots (shredded)", "75ml condensed milk", "1/2 tsp cinnamon powder", "1/2 tsp nutmeg powder", "2 tbsp ghee", "300ml full-fat milk", "15g tea leaves", "4-5 cardamom pods", "2 cinnamon sticks", "1-inch ginger", "60g egg yolks (~4)", "72g caster sugar", "30g cornflour", "30g unsalted butter"],
      "Chai & Parle-G Donuts": ["50g icing sugar", "10g milk", "1/2 tsp cardamom powder"],
      "Gulkand Donuts": ["100g Gulkand (rose jam)", "30g granulated white sugar (for topping)"]
    },
    instructions: ["Whisk eggs, sugar, and salt until combined. Mix warm milk with instant yeast; add to egg mixture.", "Add melted butter and whisk; incorporate half the flour. Add remaining flour; knead 5-10 minutes until smooth.", "Refrigerate dough 3 hours or overnight until doubled.", "Knead briefly on floured surface; roll to 1.5cm thickness. Cut circles with floured cookie cutter; place on baking paper.", "Let rise in warm place until doubled.", "Heat oil to 170°C; fry 3 minutes per side until golden. Transfer to paper towels; coat while hot with cinnamon sugar. Cool completely.", "Rooh Afza: Whip cream with Rooh Afza until stiff peaks. Poke hole in donut, pipe filling and top with whipped cream.", "Mango Lassi: Blend mango and yogurt into paste. Whip into cream until stiff peaks. Pipe into donuts.", "Rabdi: Dissolve milk powder and sugar in hot water; boil and reduce to quarter volume. Mix cornflour with milk, stir in. Add cardamom; cook until thick. Chill 1-2 hours; whip smooth. Fill donuts.", "Gajar Halwa: Fry carrots in ghee, add condensed milk, cook covered 5-8 minutes, add spices. Make pastry cream with chai-steeped milk, egg yolks, sugar, cornflour, and butter. Fill donuts with both.", "Chai & Parle-G: Make pastry cream with chai-steeped milk. Mix icing sugar, milk, and cardamom for glaze. Fill donuts; top with glaze and Parle-G biscuit.", "Gulkand: Fill donuts with gulkand jam; dust with icing sugar."],
    tips: ["Refrigerate dough 3 hours or overnight for easier handling.", "Heat oil to exactly 170°C for even frying.", "Coat donuts with cinnamon sugar while still hot for best adhesion.", "Cool donuts completely before filling."]
  },
  {
    id: "cream-buns",
    name: "Cream Buns",
    description: "Light and airy cream buns filled with creamy and fluffy vanilla whipped cream, inspired by the iconic Habib Bakery in Dubai.",
    category: "Pastries",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "90 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop",
    ingredients: {
      "Choux Pastry": ["100g milk", "100g water", "2g salt", "2g caster sugar", "90g butter", "100g plain flour", "200g egg (approximately 4 eggs)", "1 egg (for egg wash)"],
      "Vanilla Whipped Cream Filling": ["200ml liquid whipping cream", "50g icing sugar", "2 tsp vanilla essence"]
    },
    instructions: ["Combine milk, water, butter, salt, and sugar in saucepan; heat gently over medium-low.", "Stir until butter melts completely; remove from heat.", "Add flour immediately and mix to prevent lumps.", "Spread dough evenly on pan base; return to low heat.", "Cook while stirring constantly until crackling sounds indicate moisture evaporates.", "Continue cooking until dough sticks to pan with thin film forming.", "Remove from heat; mix briefly to release steam.", "Gradually add beaten eggs one at a time, mixing well between additions. Dough should hold shape without running.", "Transfer to piping bag with 1/2-inch opening; preheat oven to 230°C.", "Line baking tray with parchment; use template for consistent sizing.", "Pipe dough in continuous motion following circles; maintain 1-inch spacing.", "Lightly brush with egg wash.", "Bake at 230°C, immediately reduce to 170°C for 20 minutes.", "Open oven briefly (5 seconds) to release steam.", "Bake additional 15-20 minutes until golden and cooked through.", "Combine whipping cream, icing sugar, and vanilla essence; whip to medium-stiff peaks.", "Create hole at bottom of cooled buns with small knife.", "Fill each bun via piping bag until full and slightly heavy.", "Serve immediately or refrigerate several hours before enjoying."],
    tips: ["Add eggs gradually — the dough should hold its shape without running.", "Open oven briefly after initial baking to release steam and prevent collapse.", "Avoid overwhipping the cream; stop at medium-stiff peaks.", "Serve immediately or refrigerate for best texture."]
  },
  {
    id: "masala-chai-mousse-trifle",
    name: "Masala Chai Mousse Trifle",
    description: "Layered with an eggless, creamy masala chai mousse, delicious butterscotch sauce, and chai-soaked ladyfinger biscuits, this trifle is perfect for your dessert table.",
    category: "Desserts",
    prepTime: "45 minutes",
    cookTime: "10 minutes",
    totalTime: "295 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
    ingredients: {
      "Butterscotch Sauce": ["75 grams unsalted butter", "130 grams packed brown sugar", "95ml liquid whipping cream/heavy cream"],
      "Masala Chai Mousse": ["120ml full-fat milk", "110ml liquid whipping cream", "12-14 grams chai leaves", "20 grams sugar", "4-6 cardamom pods", "1 inch ginger", "1 cinnamon stick", "150 grams white chocolate", "165ml liquid whipping cream"],
      "Assembly / Soaking Chai": ["100ml full-fat milk", "100ml water", "5 grams tea leaves", "10 grams sugar", "1 pack ladyfinger biscuits"]
    },
    instructions: ["Combine brown sugar, cream, and butter in saucepan; heat over medium flame while stirring frequently until melted and smooth.", "Simmer one additional minute, then remove from heat and add salt. Cool completely.", "Mix milk, cream, tea leaves, sugar, and whole spices in saucepan.", "Heat on low for 5-8 minutes to infuse (reduce time if tea leaves bitter easily).", "Strain hot infused mixture over white chocolate in bowl.", "Let sit several minutes to melt chocolate, then whisk until smooth and combined.", "Whip remaining cream separately until medium peaks form (avoid overwhipping).", "Once ganache reaches room temperature, fold into whipped cream in two additions using silicone spatula.", "Transfer mousse to piping bag for assembly.", "Prepare simple chai with milk, water, and tea leaves for dipping biscuits.", "Spread initial mousse layer in serving dish.", "Add butterscotch sauce layer.", "Dip ladyfinger biscuits in cooled chai for 5 seconds; layer on top.", "Add another butterscotch sauce layer followed by remaining mousse.", "Top with butterscotch drizzle.", "Refrigerate 3-4 hours before serving."],
    tips: ["Avoid overcooking the butterscotch sauce as it thickens further when cooled.", "Reduce tea steeping time if your tea leaves tend to become bitter.", "Dip ladyfinger biscuits for only 5 seconds to avoid them becoming too soggy.", "Refrigerate 3-4 hours before serving for best set."]
  },
  {
    id: "sticky-toffee-french-toast",
    name: "Sticky Toffee French Toast",
    description: "This recipe combines two beloved desserts - sticky toffee pudding and French toast - into one epic breakfast dish featuring thick brioche soaked in date-infused custard with butterscotch topping.",
    category: "French Toast",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    totalTime: "30 minutes",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop",
    ingredients: {
      "Butterscotch Sauce": ["75g unsalted butter", "130g packed brown sugar", "95ml liquid whipping cream/heavy cream", "Sea salt (to taste)"],
      "French Toast Batter": ["60g date paste (store-bought or homemade)", "2 eggs", "120g full-fat milk", "25g brown sugar", "1/2 tsp cinnamon powder", "1/2 tsp nutmeg powder (optional)", "1/4 tsp salt", "Vanilla extract (to taste)", "Brioche bread slices", "Butter or ghee for cooking"],
      "Toppings": ["Whipped cream (optional)", "Chopped nuts of choice"]
    },
    instructions: ["Combine butter, brown sugar, and heavy cream; cook over medium heat, stirring occasionally until melted.", "Whisk mixture thoroughly until smooth; simmer 3-4 minutes on low heat until slightly thickened.", "Remove from heat, add salt, set aside.", "Prepare date paste by soaking pitted dates in boiling water 20 minutes, then blend until smooth.", "Mix warm milk with date paste until smooth.", "Add eggs, vanilla, brown sugar, cinnamon, nutmeg, and salt; whisk until combined.", "Dip brioche slices in batter for approximately 2 minutes per side.", "Heat butter in pan over medium heat; cook bread slices until golden brown on both sides.", "Layer on plate with butterscotch sauce between and on top; add whipped cream and nuts."],
    tips: ["Use thick-cut brioche bread for the best texture.", "Soak pitted dates in boiling water for 20 minutes to soften before blending.", "Dip bread for about 2 minutes per side - long enough to absorb flavor but not fall apart."]
  },
  {
    id: "orange-meringue-cake",
    name: "Orange Meringue Cake",
    description: "This delicious, summery cake is made with soft and moist vanilla cake layers filled with a tangy orange curd and fluffy meringue that's torched to perfection.",
    category: "Cakes",
    prepTime: "120 minutes",
    cookTime: "45 minutes",
    totalTime: "285 minutes",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
    ingredients: {
      "Orange Curd": ["2 egg yolks", "70 grams white granulated sugar", "1 tbsp orange zest", "50 ml fresh orange juice", "45 grams unsalted butter"],
      "Vanilla Cake": ["170 grams caster sugar", "2 tbsp orange zest", "170 grams unsalted butter (softened)", "2 tsp vanilla paste/essence", "3 eggs", "150 grams all-purpose flour", "20 grams corn flour (can substitute with more flour)", "2 tsp baking powder", "1/2 tsp salt"],
      "Swiss Meringue": ["2 egg whites", "100 grams white granulated sugar"]
    },
    instructions: ["Prepare double boiler: fill saucepan halfway with water and bring to boil. Take a heat-proof bowl fitting atop saucepan.", "Add egg yolks, orange zest, fresh orange juice, and sugar to bowl; whisk quickly.", "Once water boils, reduce heat to simmer. Place heat-proof bowl on saucepan, ensuring bowl bottom doesn't touch water.", "Begin whisking immediately and continue continuously to prevent egg scrambling. Whisk until mixture thickens and coats back of spoon, approximately 5-8 minutes.", "Remove curd from heat, add softened butter, and whisk until melted and incorporated.", "Cover orange curd with cling film and chill in refrigerator minimum two hours. Ensure cling film touches curd surface to prevent film formation.", "Preheat oven to 170 degrees Celsius. Prepare cake pans by greasing with butter and dusting with flour.", "In a bowl, add sugar and orange zest. Rub zest into sugar to release oils until sugar becomes orange. Add butter and whisk 3-5 minutes on medium-high speed until properly creamed.", "Add eggs and vanilla; whisk until combined. Batter may appear split at this stage.", "Add flour, baking powder, corn flour, and salt; whisk on low speed until just combined. Do not overmix.", "Transfer batter equally into both pans and bake 15-20 minutes until toothpick emerges clean from center. Avoid overbaking.", "Allow cakes to cool completely before assembling. If assembling next day, pack cake tightly in cling film and refrigerate.", "Prepare double boiler. Add egg whites and sugar to heat-proof bowl off heat; whisk quickly and place on saucepan. Keep whisking until sugar fully incorporates into egg whites. Test by rubbing mixture between fingers until no sugar granules remain.", "Allow meringue to cool, then whip using electric or stand mixer with whisk attachment, starting on low speed, then medium, then high speed. Whisk until egg whites reach stiff peaks.", "Add small meringue dollop and place first cake layer at bottom of desired plate or dish to prevent slipping.", "Add thin meringue layer on top and create well in center by raising meringue sides higher than center. Torch meringue thoroughly, ensuring it darkens for toasty flavor.", "Add 2 tablespoons orange curd in center of meringue and spread evenly using spoon or spatula. Top with second cake layer, then repeat meringue and curd layer, keeping meringue slightly less than before.", "Add several meringue dollops on top of curd and spread around, keeping texture high and textured. Toast meringue thoroughly everywhere using blow torch."],
    tips: ["Ensure cling film touches the surface of the orange curd to prevent a film from forming on top.", "Rub the orange zest into the sugar to release the oils before creaming with butter.", "Do not overmix the cake batter after adding flour.", "Avoid overbaking the cake layers.", "Torch the meringue thoroughly to get a toasty flavor."]
  },
  {
    id: "date-cinnamon-rolls",
    name: "Date Cinnamon Rolls",
    description: "Middle-East inspired cinnamon rolls made with soft and fluffy dough, filled with a date and cinnamon filling, and topped with a Qahwa (Arabic coffee) cream cheese frosting.",
    category: "Pastries",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "330 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Date Filling": ["200 grams pitted dates (weight without seed)", "100 ml water", "2 tsp cinnamon powder", "1/2 tsp salt"],
      "Cinnamon Roll Dough": ["92 grams granulated white sugar", "78 grams unsalted butter (softened)", "7 grams salt", "1 large egg", "454 grams all-purpose flour", "6 grams instant yeast", "255 grams full-fat milk (lukewarm)", "30 grams unsalted butter (softened)"],
      "Qahwa Cream Cheese Frosting": ["10 grams Arabic coffee powder", "10-20 ml warm water", "120 grams cream cheese", "55 grams unsalted butter (softened)", "120 grams powdered sugar", "2 tsp vanilla essence"]
    },
    instructions: ["Boil dates with water on high heat, then simmer on low for 10-15 minutes until soft and most water evaporates.", "Transfer dates, remaining water, cinnamon, and salt to blender; blend until completely smooth. Cool before using.", "Cream butter, sugar, and salt using whisk attachment for 3-5 minutes. Add egg and mix 2-4 minutes until fully combined.", "Add flour, lukewarm milk (35-40°C), and instant yeast; mix with spoon or spatula until dough begins coming together.", "Switch to dough hook (or knead by hand). Dough will be sticky initially but should become smooth and soft. Hand kneading takes up to 20 minutes. If still very sticky after 5 minutes, add 15-20 grams flour gradually.", "Perform windowpane test: stretch small piece to paper thinness without breaking. If breaks, knead longer.", "Oil bowl, add dough, coat all sides with oil. Cover with cling film and rise in warm place 1.5-2 hours until doubled.", "Punch dough, place on baking sheet. Roll with floured rolling pin into 14x18 inch rectangle, approximately 2/3 inch thick (avoid rolling too thin).", "Spread thin butter layer on dough, then thick layer of date paste on top.", "Roll dough horizontally (breadth-wise) slowly with tight tucking, forming cigar shape. Seal edges.", "Place roll seam-side down. Slice using dental floss by marking equal sizes, placing floss underneath with overhang, crossing it over dough roll.", "Place cut rolls in baking pan with adequate spacing. Cover with cling film and proof 1.5-2 hours until doubled.", "Preheat oven to 160-170°C. Bake 15-20 minutes while still slightly blonde (not golden brown).", "Mix Arabic coffee with warm water until combined (skip if making plain frosting).", "Add softened cream cheese, butter, icing sugar, and vanilla; whisk until fully combined and smooth.", "Top warm cinnamon rolls with cream cheese glaze. Cool and serve."],
    tips: ["Use lukewarm milk (35-40°C) for activating the yeast.", "Perform the windowpane test to ensure the dough is properly kneaded.", "Use dental floss to slice the rolls cleanly.", "Bake until still slightly blonde, not golden brown, for softer rolls.", "Top the rolls while still warm so the frosting melts slightly."]
  },
  {
    id: "mango-mousse-milk-cake",
    name: "Mango Mousse Milk Cake",
    description: "The perfect summer dessert featuring a delicious fresh mango mousse paired with a cardamom and saffron milk cake.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "450 minutes",
    servings: 9,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=400&fit=crop",
    ingredients: {
      "Milk Cake": ["4 eggs, separated into whites and yolks", "70 grams white granulated sugar", "80 grams all-purpose flour", "80 ml liquid whipping cream", "140 ml condensed milk", "50 ml evaporated milk", "1/2 tsp cardamom powder", "1/2 tsp saffron"],
      "Milk Mixture": ["70 ml liquid whipping cream", "70 ml full-fat milk"],
      "Mango Mousse": ["100 ml fresh mango pulp", "6 grams gelatin powder", "30 ml ice-cold water (for blooming gelatin)", "200 grams white chocolate", "225 grams liquid whipping cream (for whipping)", "20 grams extra fresh mango pulp for topping"]
    },
    instructions: ["Preheat oven to 180°C. Prepare baking pan with parchment paper or greased butter and flour.", "Separate egg whites and yolks into two bowls; add half sugar to each. Whip yolks until light and fluffy; whip whites until stiff peaks form.", "Fold egg white mix and flour into yolks alternately in thirds using a silicone spatula gently to preserve airiness. There is no baking powder in this cake - the airiness of the egg whites is what helps the cake rise.", "Transfer batter to prepared pan and bake 15-20 minutes until toothpick comes out clean. Cake should be approximately 2 inches thick.", "Poke holes into hot cake using a fork and pour milk mixture generously over it; allow to cool.", "Combine liquid whipping cream, condensed milk, evaporated milk, cardamom powder, and saffron until fully blended.", "Bloom gelatin by sprinkling powder over ice-cold water, mixing immediately, then setting in fridge for 15 minutes.", "Place white chocolate in heat-proof bowl. Heat milk, whipping cream, and fresh mango pulp to boiling. Pour over chocolate, wait one minute, then whisk until fully incorporated. If the mangoes are not as yellow as you'd like, add a few drops of yellow food coloring at this step.", "While mixture remains hot, add bloomed gelatin and whisk until fully melted. Allow to cool to room temperature. In separate bowl, whip remaining liquid whipping cream to medium peaks.", "Once milk mixture reaches room temperature, gradually pour into whipped cream while folding gently with silicon spatula to maintain lightness.", "Top cooled milk cake with mango mousse. Add dollops of fresh mango pulp on top and swirl. Chill for at least 6 hours or overnight until fully set. Serve cold."],
    tips: ["There is no baking powder in this cake - the airiness of the egg whites is what helps the cake rise.", "Poke holes in the cake while still hot to help the milk mixture soak in.", "If the mangoes are not as yellow as you'd like, add a few drops of yellow food coloring.", "Chill for at least 6 hours or overnight until fully set.", "Serve cold for best results."]
  },
  {
    id: "mango-kulfi-milk-cake",
    name: "Mango Kulfi Milk Cake",
    description: "A delicious and super simple milk cake topped with a mango kulfi milk mixture that will satisfy all your summer cravings and remind you of childhood.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "60 minutes",
    totalTime: "90 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Homemade Kulfi": ["360 ml full-fat milk", "75 grams sugar", "1 tablespoon khoya milk solids (optional)", "180 ml full-fat milk", "9 grams cornstarch/cornflour", "1/2 tsp cardamom powder", "50 grams thick cream"],
      "Mango Kulfi Milk Mixture": ["250 grams homemade kulfi", "250 grams fresh mango puree", "100 grams condensed milk", "250 ml full-fat milk"],
      "Cake Sponge": ["4 eggs (separated into whites and yolks)", "70 grams white granulated sugar", "80 grams all-purpose flour"],
      "Topping & Assembly": ["200 grams sweetened whipped cream", "200 grams fresh mango"]
    },
    instructions: ["In a heavy-bottomed saucepan, add milk and cook on medium heat until boiling, then cook for another five minutes, stirring continuously to prevent burning.", "Add sugar and milk solids (if using) and mix until combined; cook for another 5 minutes until thickened.", "In a separate bowl, mix remaining milk and corn flour to form a slurry. Reduce heat to low and gradually add slurry while mixing continuously. Add cardamom powder and saffron; cook for 3-5 minutes until thickened.", "Add cream and mix; cook for another 2 minutes, then remove from heat and let cool.", "For Mango Kulfi Milk Mixture: Add all ingredients in a bowl and whisk until fully combined; set aside.", "Preheat oven to 180 degrees Celsius. Prepare baking pan with parchment paper or grease with butter and flour.", "Place egg whites and yolks in separate bowls; add half the sugar to each bowl, adding vanilla to egg yolk bowl. Whip yolks until light and fluffy; whip whites until stiff peaks form.", "Add egg white mix and flour into egg yolk mix alternately, 1/3rd at a time. Fold gently with silicone spatula after each addition to avoid deflating the mixture. There is no baking powder in this cake - the airiness of the egg whites is what helps the cake rise and gives it that spongey texture.", "Transfer batter to prepared pan and bake for 15-20 minutes until a toothpick comes out clean. Cake layer should be approximately 2 inches thick.", "As soon as cake comes out of oven, poke holes using a fork to help milk soak better. While hot, pour generous amount of milk mixture and let cool.", "Chill cake in refrigerator for 4-6 hours or overnight. Top with sweetened whipped cream, more milk mixture, and fresh mangoes. Serve cold with additional milk."],
    tips: ["There is no baking powder in this cake - the airiness of the egg whites is what helps the cake rise.", "Stir the kulfi continuously to prevent burning.", "Poke holes in the cake while still hot so the milk soaks in better.", "Chill for 4-6 hours or overnight for best results.", "Serve cold with additional milk on the side."]
  },
  {
    id: "mango-lassi-mousse-cups",
    name: "Mango Lassi Mousse Cups",
    description: "Inspired by a classic summer drink, these no-bake mango lassi mousse cups are super luscious and creamy with a white chocolate and yogurt base featuring mango and cardamom flavors.",
    category: "Desserts",
    prepTime: "30 minutes",
    cookTime: "5 minutes",
    totalTime: "35 minutes",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Mango Lassi Mousse": ["7 grams gelatin powder (optional, but recommended)", "35 ml ice-cold water (for blooming gelatin)", "200 grams white chocolate", "70 ml liquid whipping cream", "100 ml laban (drinking yoghurt) or 60 grams regular full-fat yoghurt mixed with 40 grams milk", "120 ml fresh or canned mango pulp", "1.5 tsp cardamom powder", "1/4 tsp salt", "220 ml liquid whipping cream (for whipping)"],
      "Toppings": ["20 grams extra fresh mango pulp", "Whipped cream", "Finely chopped pistachios and almonds"]
    },
    instructions: ["Bloom gelatin by pouring ice-cold water into a bowl, sprinkling gelatin powder over it, mixing until dissolved, then refrigerating for 15 minutes.", "Place chocolate in a heat-proof bowl.", "Add laban, whipping cream, mango pulp, cardamom powder, and salt to a saucepan and bring to a boil. Pour the hot milk mixture over chocolate, let sit one minute until melted, then whisk together. Optional: add yellow food coloring if desired.", "While still hot, add bloomed gelatin and whisk until fully melted and incorporated. Ensure mixture remains hot or gelatin won't melt properly. Set aside to cool to room temperature.", "In a separate bowl, whip the remaining liquid whipping cream with a hand or electric mixer until it reaches medium peaks. Avoid over-mixing to prevent cream from splitting.", "Once the milk mixture reaches room temperature, gradually pour it into the whipped cream while folding gently with a silicon spatula to keep the mixture light and fluffy.", "Pour mousse into chosen cups, then place dollops of fresh mango pulp on top and swirl in. Chill for at least 6 hours or overnight until fully set.", "Top with whipped cream and chopped nuts and serve cold."],
    tips: ["Ensure the mixture is still hot when adding bloomed gelatin or it won't melt properly.", "Avoid over-mixing the whipping cream to prevent it from splitting.", "Add yellow food coloring if desired for a more vibrant color.", "Chill for at least 6 hours or overnight until fully set.", "You can substitute laban with regular full-fat yoghurt mixed with milk."]
  },
  {
    id: "lavender-lemon-mousse",
    name: "Lavender Lemon Mousse",
    description: "Inspired by a visit to a lavender farm, this dessert is made with a floral lavender mousse and lemon curd and tastes like spring on a plate.",
    category: "Desserts",
    prepTime: "45 minutes",
    cookTime: "15 minutes",
    totalTime: "420 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    ingredients: {
      "Lemon Curd": ["4 egg yolks", "140 grams granulated white sugar", "15 grams lemon zest", "100 ml fresh lemon juice", "90 grams unsalted butter (softened)"],
      "Lavender Mousse": ["6 grams gelatin powder", "30 ml ice-cold water (for blooming gelatin)", "200 grams white chocolate", "70 ml liquid whipping cream", "100 ml full-fat milk", "10-15 grams fresh or dried lavender", "225 grams liquid whipping cream (for whipping)", "Purple food color (optional)"],
      "Sugar Shard": ["150 grams granulated white sugar", "100 grams corn syrup", "50 grams water", "10 grams fresh or dried lavender"]
    },
    instructions: ["Fill a saucepan halfway with water and let it come to a boil. Meanwhile, take a heat-proof bowl that fits at the top of the saucepan.", "Add the egg yolks, sugar, lemon zest, and fresh lemon juice into the bowl and give it a quick whisk.", "Once the water has come to a boil, reduce the heat and bring the water to a simmer. Place the heat-proof bowl on top of the saucepan. Make sure that the bottom of the bowl is not touching the water.", "Start whisking the mixture immediately and continue whisking to stop the eggs from scrambling. Keep whisking until the mixture thickens and coats the back of a spoon, about 5-8 minutes.", "Once thickened, remove the lemon curd from the heat, add the softened butter, and whisk until melted and incorporated.", "Cover the lemon curd with cling film and chill in the fridge for at least an hour. Make sure the cling film is touching the surface of the lemon curd to stop a film from forming. Give it a quick whisk before using to smooth out any lumps.", "Pour ice-cold water into a bowl and sprinkle the gelatin powder over it. Immediately mix until dissolved, then let it set in the fridge for 15 minutes.", "In a heat-proof bowl, add the chocolate. Add the milk, whipping cream, and lavender to a saucepan and bring to a boil. Reduce the heat, cover, and let the mixture simmer on low for 5 minutes. Turn the heat down and let it sit for another 10-15 minutes to infuse the lavender flavor.", "Reheat the mixture and pour it on the chocolate, let it sit for a minute until the chocolate melts, then whisk together until the chocolate is properly incorporated.", "While the mixture is hot, add the bloomed gelatin and whisk until fully melted and incorporated. Set aside until it cools to room temperature.", "In a separate bowl, add the remaining liquid whipping cream and whip until it reaches medium peaks. You can add purple food coloring while whisking if desired.", "Once the chocolate mixture reaches room temperature, gradually pour it into the whipped cream while folding gently with a silicon spatula to keep the mixture light and fluffy.", "Pour the mousse into a silicone mold or bowl and let it chill for 6-8 hours until completely set.", "In a saucepan, add the sugar, water, and corn syrup and start cooking on medium heat. Mix gently until the mixture starts boiling, then stop mixing and cook until the sugar reaches 145 degrees Celsius.", "Prepare a silicone mold, mat, or baking paper. Place the lavender in the molds or cookie cutters, then pour the sugar mixture on top as soon as it reaches temperature. Oil your cookie cutters so the shard comes out easily. Let it set for 30 minutes.", "Once chilled, remove mousse from the mold, cut out a circle from the center, and fill it with lemon curd. Top with the sugar and lavender shard and enjoy."],
    tips: ["Ensure the cling film touches the surface of the lemon curd to prevent a film from forming.", "Let the lavender infuse in the milk mixture for 10-15 minutes for maximum flavor.", "Add purple food coloring while whisking the cream if desired.", "Oil your cookie cutters so the sugar shard comes out easily.", "Cook the sugar to exactly 145 degrees Celsius for the sugar shard."]
  },
  {
    id: "mango-cream-buns",
    name: "Mango Cream Buns",
    description: "Light, airy, and crunchy choux buns filled with fresh mango custard and whipped cream that taste refreshing and delicious.",
    category: "Pastries",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "180 minutes",
    servings: 25,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Mango Custard": ["2 egg yolks", "2 whole eggs", "75 grams caster sugar", "1 tsp lemon zest", "30 ml lemon juice", "280 grams mango puree", "85 grams unsalted butter", "200 grams finely chopped mangoes", "300 ml sweetened whipped cream for filling and topping"],
      "Craquelin": ["90 grams unsalted butter (room temperature)", "90 grams brown sugar", "70 grams all-purpose flour"],
      "Choux Pastry": ["100 ml full-fat milk", "100 ml water", "90 grams unsalted butter", "2 grams sugar", "2 grams salt", "110 grams all-purpose flour", "200 grams beaten eggs (about 4 eggs)", "20 grams extra egg for egg wash"]
    },
    instructions: ["Prepare double boiler by filling saucepan halfway with water; bring to boil and position heat-proof bowl on top.", "Add sugar, eggs, egg yolks, lemon zest, lemon juice, and mango puree to bowl; whisk quickly.", "Once water simmers, place bowl on saucepan ensuring bottom doesn't touch water.", "Whisk continuously to prevent eggs from scrambling until mixture thickens and coats spoon back (5-8 minutes).", "Remove from heat; add softened butter and whisk until melted and incorporated.", "Cover custard with cling film and chill minimum two hours, ensuring film touches surface to prevent skin formation.", "Before filling, whisk custard smooth and mix in finely chopped mango pieces; place in piping bag with small round tip.", "Fill separate piping bag with sweetened whipped cream using small round tip; set aside.", "Combine softened butter, brown sugar, and flour in bowl; mix using spatula or knead by hand until dough holds shape.", "Roll dough between two baking sheets to 2mm thickness; freeze 15-20 minutes until hard.", "Preheat oven to 230 degrees Celsius.", "In saucepan, combine milk, water, butter, sugar, and salt; bring to boil on medium heat ensuring butter completely melts.", "Remove from heat; add flour and immediately mix with wooden spoon or spatula to prevent lumps, creating smooth thick dough (panade).", "Continue mixing panade until almost all steam releases; add beaten eggs one at a time, mixing after each addition until smooth, thick, shiny dough forms that should hold slight shape without falling.", "Transfer dough to piping bag without tip; cut 1-1.5 cm opening at end. Line baking tray with paper and use 4 cm cookie cutter to create guide circles; flip paper before piping.", "Place piping bag at circle center at angle; pipe dough in one motion without moving bag to form thick blob; ensure adequate spacing between buns.", "Gently cover each blob with egg wash.", "Cut craquelin same size as choux buns using same cutter; gently place one on each blob using offset spatula. Work quickly as craquelin softens fast; return to fridge 10 minutes if needed.", "Before baking, reduce temperature to 170 degrees Celsius. Bake 20 minutes undisturbed without opening oven.", "After 20 minutes, open oven door slightly for 5 seconds to release steam; bake additional 15-20 minutes until golden brown.", "Once completely cooled, push whipped cream piping bag into bun bottom center and fill halfway; fill remaining bun with mango curd through same hole until full. Avoid overfilling. Clean excess from bottom with offset spatula or knife.", "Top each bun with whipped cream swirl and serve fresh."],
    tips: ["Work quickly with the craquelin as it softens fast at room temperature.", "Do not open the oven during the first 20 minutes of baking.", "After 20 minutes, open the oven door slightly for 5 seconds to release steam.", "Ensure the panade has released almost all steam before adding eggs.", "Avoid overfilling the buns with cream and custard."]
  },
  {
    id: "no-bake-mango-kunafa-cheesecake",
    name: "No-Bake Mango Kunafa Cheesecake",
    description: "Rich, creamy, and easy no-bake mango cheesecake jam-packed with mango flavor and paired with a Kunafa crust instead of a regular biscuit base for extra crunch and deliciousness.",
    category: "Cheesecakes",
    prepTime: "60 minutes",
    cookTime: "15 minutes",
    totalTime: "435 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=400&fit=crop",
    ingredients: {
      "Kunafa Crust": ["100 grams granulated white sugar", "70 grams water", "100 grams Kunafa (kataifi dough)", "80 grams unsalted butter (melted)"],
      "Mango Cheesecake Filling": ["288 grams full-fat cream cheese", "80 grams white granulated sugar", "170 grams mango puree", "24 grams sour cream", "1 teaspoon vanilla essence", "135 milliliters liquid whipping cream"],
      "Topping": ["50 milliliters sweetened whipped cream", "Fresh mangoes"]
    },
    instructions: ["Make the sugar syrup: Place the sugar and water in a saucepan and bring it to a boil on medium heat without mixing. Lower the heat, let it simmer, and cook for another 10 minutes or until it thickens enough to coat the back of a spoon.", "Preheat the oven to 200 degrees Celsius.", "In a bowl, add the Kunafa dough and melted butter and toss together until the dough is fully soaked with the butter.", "Press down the Kunafa dough into the springform pan until it forms an even crust. Bake for 10-15 minutes until golden brown.", "As soon as it comes out of the oven, pour sugar syrup on top and let it cool completely.", "In the bowl add the cream cheese and whisk until smooth. Then add the sugar and mix again until the sugar is fully incorporated and you cannot feel any sugar granules in the mix.", "Add the mango puree, sour cream, and vanilla essence and mix for 2-3 minutes on med-high speed until everything is well combined.", "Add the heavy whipping cream to a separate bowl and whisk until it reaches medium peaks. Do not overmix at this step as the cream has to be further mixed with the cheesecake batter.", "Add the whipped cream into the cream cheese mixture in three parts and gently fold it in with a silicone spatula. Take your time and fold gently to avoid knocking air out of the batter.", "Spread the cheesecake batter on top of the cooled Kunafa crust, then add a few dollops of mango puree on top and swirl it in. Let it chill in the fridge until completely set.", "Release the cake from the springform pan. Heat the sides of the pan with a blow torch or lighter then gently run a heated knife on the sides to release it easily.", "Top with whipped cream and fresh mangoes. Serve cold."],
    tips: ["Do not mix the sugar syrup while it boils - just let it simmer.", "Do not overmix the whipping cream as it has to be further mixed with the cheesecake batter.", "Fold the whipped cream into the cream cheese mixture gently to avoid knocking air out.", "Heat the sides of the springform pan with a blow torch or lighter for easy release.", "The whipped cream is what helps give the cheesecake a firm structure, so if you mix it too vigorously, you will end up with a loose cheesecake layer that will not set properly."]
  },
  {
    id: "jimjam-mousse-cake",
    name: "JimJam Mousse Cake",
    description: "This JimJam mousse cake features a fresh and creamy eggless strawberry mousse, strawberry milk-soaked ladyfinger biscuits, strawberry jam, and JimJam biscuits that tastes like nostalgia on a plate.",
    category: "Cakes",
    prepTime: "45 minutes",
    cookTime: "0 minutes",
    totalTime: "405 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Strawberry Mousse": ["70 ml liquid whipping cream", "70 ml full-fat strawberry milk", "100 ml fresh strawberry puree", "8 grams gelatin powder", "200 grams white chocolate", "225 ml liquid whipping cream for whipping"],
      "Assembly": ["100 grams ladyfinger biscuits", "100 ml strawberry milk", "100 ml strawberry jam", "300 grams JimJam biscuits"]
    },
    instructions: ["Bloom gelatin according to packet directions by stirring into cold water and allowing it to activate.", "Combine strawberry milk with liquid whipping cream in a small saucepan. Warm over medium heat until steaming without boiling. Place white chocolate and strawberry puree in a separate heatproof bowl.", "Pour hot milk mixture over chocolate and puree. Allow to sit briefly, then whisk until smooth. Microwave in 20-second bursts if needed to fully melt chocolate.", "Stir bloomed gelatin into warm mixture until dissolved. Set aside to cool completely.", "Whip cream in a separate bowl until medium peaks form, holding shape but not stiff.", "Once strawberry-chocolate base cools, fold it into whipped cream in three additions using a spatula, working slowly and carefully to maintain airiness.", "Line a tray with parchment paper. Place pastry ring or mold on top, or prepare serving dish.", "Pour strawberry milk into a shallow bowl. Dip each ladyfinger biscuit briefly, no more than 5 seconds, to avoid excess liquid absorption.", "Arrange dipped biscuits tightly across mold base in an even layer.", "Pipe a thin strawberry jam layer over biscuits and spread evenly. Pour prepared mousse on top and smooth the surface.", "Cover and refrigerate 6-8 hours minimum, or preferably overnight, until completely set.", "Carefully unmold cake. Decorate top with JimJam biscuits and pipe whipped cream between cookies. Serve chilled."],
    tips: ["Dip ladyfinger biscuits for no more than 5 seconds to avoid excess liquid absorption.", "Fold the chocolate base into whipped cream slowly and carefully to maintain airiness.", "Refrigerate 6-8 hours minimum, or preferably overnight, until completely set.", "Microwave the chocolate mixture in 20-second bursts if needed to fully melt the chocolate."]
  },
  {
    id: "the-bear-chocolate-cake",
    name: "The Bear Chocolate Cake",
    description: "Inspired by Marcus's iconic cake from The Bear, this rich cake is made with fudgy layers of chocolate cake filled with creamy chocolate mousse and topped with a light chocolate whipped cream frosting.",
    category: "Cakes",
    prepTime: "60 minutes",
    cookTime: "30 minutes",
    totalTime: "150 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop",
    ingredients: {
      "Chocolate Cake": ["125 ml buttermilk (or 125 ml milk mixed with vinegar)", "120 grams all-purpose flour", "100 grams white granulated sugar", "100 grams brown sugar", "38 grams cocoa powder", "1 tsp baking powder", "3/4 tsp baking soda", "1/2 tsp salt", "1/2 tsp coffee", "60 ml oil", "1 egg", "1 tsp vanilla essence", "125 ml boiling water"],
      "Chocolate Mousse": ["35 ml liquid whipping cream/heavy cream for boiling", "35 ml full-fat milk", "100 grams milk chocolate", "110 ml whipping cream for whipping"],
      "Chocolate Frosting": ["200 ml liquid whipping cream/heavy cream", "100 grams milk/dark chocolate (melted)", "15 grams cocoa powder"]
    },
    instructions: ["Preheat the oven to 170°C (340°F).", "Combine dry ingredients - flour, baking powder, baking soda, salt, cocoa powder, and coffee powder - in a bowl. Give them a quick whisk.", "Add brown sugar, white sugar, buttermilk, oil, egg, and vanilla extract. Mix well until you have a smooth batter with no lumps.", "Pour hot water gradually, whisking as you go until the mixture is fully incorporated.", "Prepare two 6-inch cake pans by greasing them with butter and dusting lightly with flour. Divide the batter equally between the pans and bake for 15 to 20 minutes. The cakes are done when a toothpick inserted in the center comes out clean.", "Allow the cakes to cool completely in the pans. Once cooled, wrap them tightly in cling film and refrigerate until ready to assemble.", "In a saucepan, warm the liquid cream and milk together over medium heat until they just begin to simmer. Place chopped chocolate in a heat-safe bowl.", "Pour the hot cream mixture over the chocolate and let it sit for a minute so the chocolate can melt. Stir into a smooth ganache and set aside to cool to room temperature.", "In a separate large bowl, whip the remaining cream until soft to medium peaks form. Be careful not to overwhip.", "Add the cooled ganache to the whipped cream in two parts, folding gently with a spatula to combine without deflating the cream.", "In a mixing bowl, begin whipping the liquid cream on medium speed until it starts to thicken slightly.", "Add in the melted and cooled chocolate, along with icing sugar and cocoa powder. Continue whipping until medium peaks form. Avoid overmixing to keep the texture light and spreadable.", "Pipe a ring of chocolate frosting around the edge of your first cake layer. Spoon a few tablespoons of mousse into the center and spread it out evenly.", "Repeat this process with the next cake layer, and top with the final layer of cake. Chill the stacked cake in the fridge for 15 minutes.", "Frost the outside of the cake with the remaining chocolate frosting. You can go for a smooth finish or a rustic, messy look.", "Refrigerate the cake for at least 30 minutes before slicing to help everything set nicely."],
    tips: ["You can substitute buttermilk with 125 ml milk mixed with vinegar.", "Pour the hot water gradually while whisking to ensure full incorporation.", "Be careful not to overwhip the cream for the mousse - it should be soft to medium peaks.", "Fold the ganache into the whipped cream gently to maintain airiness.", "Chill the stacked cake for 15 minutes before frosting to help it firm up."]
  },
  {
    id: "gajar-halwa-cheesecake",
    name: "Gajar Halwa Cheesecake",
    description: "This delicious fusion dessert takes the classic New York-style cheesecake to a new level with a gajar halwa filling paired with a crunchy crust and a silky smooth salted caramel topping.",
    category: "Cheesecakes",
    prepTime: "60 minutes",
    cookTime: "120 minutes",
    totalTime: "540 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
    ingredients: {
      "Gajar Halwa Layer": ["3 tbsp ghee or butter", "300 grams grated carrots (weighed after squeezing moisture out)", "180 ml condensed milk", "1/2 tsp cinnamon powder"],
      "Salted Caramel Sauce": ["200 grams granulated white sugar", "90 grams unsalted butter", "120 ml liquid whipping cream/heavy cream", "1/4 tsp salt"],
      "Cheesecake Crust": ["300 grams digestive biscuits (crushed into fine powder)", "150 grams butter melted", "1 tsp cinnamon"],
      "Cheesecake Batter": ["90 grams caster sugar", "20 grams cornflour", "450 grams cream cheese (room temperature)", "30 grams sour cream (optional)", "1 egg", "1 tsp vanilla extract", "150 ml liquid whipping cream/heavy cream"]
    },
    instructions: ["Start by finely grating the carrots and squeezing out all the excess water (weigh them after squeezing to get the correct amount).", "Melt ghee in a pan, then add the grated carrots. Saute on medium heat, stirring frequently, for 3-5 minutes until the moisture dries up.", "Mix in the condensed milk and cinnamon powder, then cover and cook on low heat for around 15 minutes, stirring every few minutes, until the carrots are soft and cooked through.", "Uncover and continue cooking until the mixture is dry and holds together well.", "Let the halwa cool slightly, then shape it into a disc the size of your springform pan using parchment paper. Freeze for at least 30 minutes to help it set and make layering easier.", "Place sugar into a saucepan over medium heat. Stir frequently to help it melt evenly and avoid burning. Keep cooking until it turns a deep amber color.", "Add the butter right away, whisking until smooth. Let it bubble for about 2 minutes.", "Carefully pour in the cream, whisk again, and cook for another 2 minutes. Turn off the heat, stir in the salt, and let the caramel cool completely before using. Avoid overcooking, or it may become too thick.", "Preheat the oven to 160 degrees Celsius.", "Combine crushed digestive biscuits, melted butter, and a pinch of cinnamon powder in a bowl. Mix well until the texture resembles wet sand.", "Lightly grease a springform pan with oil spray to prevent the crust from sticking.", "Transfer the biscuit mixture to the pan and press it firmly into the base and up the sides, aiming for a smooth and even finish.", "Bake at 160°C for 10 minutes, then set aside and allow the crust to cool fully before using.", "In a mixing bowl, whisk together caster sugar, cornflour, and a pinch of salt until evenly combined.", "Add the cream cheese and beat on medium speed for 2-4 minutes until the mixture is smooth and the sugar is fully dissolved.", "Add the egg and vanilla extract, and whisk again until fully incorporated.", "Slowly pour in the liquid whipping cream while mixing on low speed. Mix just until combined - avoid overmixing to reduce air bubbles which could cause cracking. Tap the bowl a few times to release trapped air.", "Pour half the cheesecake mixture over the cooled crust and smooth the surface.", "Gently place the frozen carrot halwa layer over the cheesecake batter and press down lightly to settle it in. Pour the remaining cheesecake mixture on top and spread evenly with an offset spatula.", "Place the cheesecake on the middle oven rack, and place a tray filled with boiling water on the bottom rack to create steam and prevent cracking.", "Bake the cheesecake undisturbed for 1 hour. After that, continue baking until the edges are firm and the center still jiggles slightly. This may take another 15-30 minutes. Avoid overbaking.", "Once done, turn the oven off and leave the cheesecake inside with the door closed for another hour. This gradual cooling process helps prevent the top from cracking. Let it cool on the counter for another hour, then refrigerate for at least 6 hours or overnight to fully set.", "Remove the cheesecake from the pan, top with the cooled salted caramel, and serve cold."],
    tips: ["Weigh the carrots after squeezing out moisture to get the correct amount.", "Freeze the halwa disc for at least 30 minutes to make layering easier.", "Avoid overcooking the caramel or it may become too thick.", "Avoid overmixing the cheesecake batter to reduce air bubbles which could cause cracking.", "Place a tray of boiling water on the bottom rack to create steam and prevent cracking.", "Turn the oven off and leave the cheesecake inside with the door closed for another hour for gradual cooling.", "Refrigerate for at least 6 hours or overnight to fully set."]
  },
  {
    id: "spicy-mango-tarts",
    name: "Spicy Mango Tarts",
    description: "Crisp shortbread shell filled with Tajin-covered mangoes and a creamy mango curd, topped with a perfectly torched meringue.",
    category: "Tarts",
    prepTime: "60 minutes",
    cookTime: "60 minutes",
    totalTime: "300 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Shortcrust Pastry": ["130 grams unsalted butter (softened)", "100 grams caster sugar", "1 egg", "250 grams all-purpose flour"],
      "Mango Curd": ["4 egg yolks", "120 grams granulated white sugar", "150 grams mango puree", "15 grams lime zest (3-4 limes)", "20 ml lime juice", "10 grams fine coconut flakes", "90 grams unsalted butter (softened)"],
      "Tajin Mangoes": ["2 mangoes (finely chopped)", "5 grams lime zest (1 lime)", "2-3 teaspoons Tajin seasoning"],
      "Meringue": ["2 egg whites", "100 grams granulated white sugar"]
    },
    instructions: ["Cream softened butter and sugar together approximately 3-5 minutes until light and fluffy.", "Add egg and whisk for another 2 minutes until fully incorporated.", "Reduce mixer speed to low and slowly add flour, mixing just until combined. Avoid overmixing to prevent tough pastry from gluten development.", "Place dough between parchment sheets and roll to 2mm thickness. Chill 20-30 minutes until firm.", "Press perforated tart ring into chilled dough for base. Cut long strips for sides and press along inner edges, sealing to base. Smooth edges with fingers.", "Chill shaped shell another 15 minutes. Preheat oven to 165°C.", "Trim excess dough from top edges. Add scrunched parchment paper to center and fill with baking weights to prevent puffing.", "Bake 20 to 25 minutes until golden brown.", "Whisk together egg yolks, granulated sugar, mango puree, lime juice, lime zest, and fine coconut flakes.", "Set up double boiler by bringing water to gentle boil in pot, then placing bowl on top without touching water. Lower heat to maintain simmer.", "Pour mango mixture into bowl and cook while whisking constantly. In about 5 minutes, mixture should thicken and turn pale, indicating eggs are cooked through.", "Remove bowl from heat and allow to cool a couple minutes. Whisk in butter until completely melted and blended.", "Cover curd surface with plastic wrap (touching curd to prevent skin formation) and refrigerate minimum one hour until set. Once chilled, whisk to smooth, then transfer to piping bag.", "Finely dice mangoes and toss with lime zest and Tajin seasoning to preference.", "Using same double boiler setup, combine egg whites and sugar in bowl. Cook while whisking 3-5 minutes until sugar fully dissolves. Test by rubbing between fingers - should feel completely smooth.", "Remove bowl from heat and whip mixture until glossy medium to stiff peaks form, approximately 15 minutes. Scoop into piping bag.", "Pour extra Tajin onto plate. Run lime wedge along tart shell rim to moisten, then invert tart and roll edge in Tajin seasoning, similar to salting a cocktail glass rim.", "Spoon Tajin mango mixture into tart base and spread out. Pipe mango curd over it, filling to top. Chill minimum 2 hours to firm filling.", "Right before serving, pipe meringue on top and torch for golden finish. Serve chilled."],
    tips: ["Avoid overmixing the pastry dough to prevent tough pastry from gluten development.", "Use baking weights to prevent the pastry from puffing during blind baking.", "Cover the curd surface with plastic wrap touching the curd to prevent skin formation.", "Roll the tart edge in Tajin seasoning like salting a cocktail glass rim for extra flavor.", "Chill the filled tart minimum 2 hours before adding meringue to firm the filling."]
  },
  {
    id: "pistachio-kunafa-cookies",
    name: "Pistachio Kunafa Cookies",
    description: "Inspired by the world-famous pistachio and kunafa chocolate bars from Fix Chocolatiers in Dubai, these double chocolate cookies are soft and chewy with crunchy pistachio, kunafa, and tahini filling.",
    category: "Cookies",
    prepTime: "45 minutes",
    cookTime: "25 minutes",
    totalTime: "190 minutes",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Double Chocolate Cookie Dough": ["125 grams all-purpose flour", "55 grams cocoa powder", "1/2 tsp baking powder", "1/2 tsp baking soda", "1 tsp cornflour/cornstarch", "1/2 tsp salt", "115 grams unsalted butter (softened)", "100 grams brown sugar", "100 grams white sugar", "1 egg", "1 tsp vanilla essence", "15 ml milk", "150 grams chocolate chips (combination of milk and dark chocolate)"],
      "Pistachio Kunafa Filling": ["25 grams unsalted butter", "65 grams Kunafa dough", "100 grams pistachio butter", "20 grams tahina"]
    },
    instructions: ["Combine dry ingredients in a bowl: all-purpose flour, cocoa powder, baking powder, baking soda, cornstarch, and salt.", "In a stand mixer, add softened butter and both sugars and cream together on high speed for 3-5 minutes until well combined and creamy.", "Add room-temperature egg and vanilla essence into butter mixture and whisk until well combined with no liquid remaining.", "With mixer on slow, add dry ingredients into batter and mix on low speed until everything is well incorporated with no flour streaks remaining.", "Add milk and whisk until completely incorporated.", "Add chocolate chips to dough and mix on high speed briefly to incorporate without overmixing.", "Wrap prepared cookie dough tightly in cling film and chill in refrigerator for 2-3 hours, or ideally overnight.", "Heat saucepan and add butter. Once melted, add Kunafa dough and mix. Continue cooking on medium heat, mixing every few minutes, until dough turns golden brown and crispy. Place on paper towel to remove excess butter.", "Mix dried dough with pistachio paste and tahini and chill for at least 1 hour until set.", "Once filling is set, portion in teaspoon sizes and roll to form balls.", "Preheat oven to 170 degrees Celsius.", "Portion chilled cookie dough into 55 gram balls, flatten each with back of spoon creating deep indent in center. Place filling portions in center and shape dough around it to form cookie balls, ensuring filling is properly covered.", "Place cookie dough balls on baking tray lined with baking paper with enough space for spreading. Dough balls can be frozen in ziplock bag for up to 1 month.", "Bake for 10-12 minutes until sides are set but center is still soft; cookies continue cooking after removal.", "As soon as cookies come out of oven, carefully top with few chocolate chips and shape with round cookie cutter if required.", "Let them chill for at least 20 minutes before enjoying."],
    tips: ["Chill the cookie dough for 2-3 hours, or ideally overnight, for best results.", "Cook the Kunafa dough until golden brown and crispy, then place on paper towel to remove excess butter.", "Chill the pistachio kunafa filling for at least 1 hour until set before portioning.", "Bake until sides are set but center is still soft - cookies continue cooking after removal.", "Dough balls can be frozen in a ziplock bag for up to 1 month."]
  },
  {
    id: "nutella-donuts",
    name: "Nutella Donuts",
    description: "Soft, fluffy, and light tangzhong-based donuts generously filled with Nutella and coated in sugar. A no-fuss approach that yields remarkably tender donuts.",
    category: "Doughnuts",
    prepTime: "2 hours",
    cookTime: "30 minutes",
    totalTime: "2 hours 30 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600&h=400&fit=crop",
    ingredients: {
      "Tangzhong": ["4 tbsp milk (50g)", "1 tbsp flour (10g)"],
      "Dough": ["3/4 cup milk (180g)", "1.5 tsp yeast", "3 cups all purpose flour (400g)", "2 tbsp milk powder (15g)", "1/4 cup sugar (50g)", "1 large egg, room temperature", "5 tbsp softened butter, divided into 2 parts (70g)", "1/2 tsp salt"],
      "Coating & Filling": ["1 cup granulated sugar for coating (200g)", "250-300g Nutella mixed with 1-2 tbsp oil"]
    },
    instructions: ["Make the tangzhong by stirring the flour and milk in a nonstick pan over medium heat until they form a thick paste.", "Mix the tangzhong with cold milk and yeast in the bowl of your standing mixer and let sit for 5 minutes. The heat of the tangzhong will bring the overall temperature to lukewarm, ideal for the yeast.", "Add all the other ingredients for the dough, leaving out half of the butter. Knead at medium-high speed using a dough hook for 5 minutes until the dough starts to come together.", "Add the remaining butter and knead again for 5-8 minutes until a smooth and stretchy dough has formed. It should pull away from the edges of the bowl.", "Cover and let the dough rise for about 1 hour until it doubles in size (or overnight in the fridge, but don't rise at room temperature and then leave the dough in the fridge).", "Roll the dough into a 1/2 inch thick sheet. Cut out 4\" circles. Repeat until all the dough is used up.", "Place the circle donuts onto small pieces of parchment paper, and transfer them to a tray. Rest for about 30-45 minutes at room temperature.", "Heat 2-3 inches of oil in a wok over medium heat. Once it has reached 350F, carefully drop in a test donut, removing the parchment paper, and fry for about 2 minutes per side. Test for doneness and adjust timing as needed. Fry all donuts, and keep the raw donuts in a cool place as you fry so they don't overproof.", "While warm, dip the donuts in the sugar and coat them generously.", "Microwave the Nutella for 5-10 seconds and add the oil to make it a bit runnier. Transfer to a piping bag fit with a Bismarck tip.", "Fill your donuts with 20-25g of Nutella each.", "Serve and enjoy! These are best eaten fresh but stay really good for a day."],
    tips: ["These donuts are best consumed fresh but remain good quality for one day.", "The tangzhong method creates exceptionally soft, fluffy donuts.", "Proper proofing temperature control is essential; don't refrigerate after room temperature rising."]
  },
  {
    id: "creme-brulee-donuts",
    name: "Creme Brulee Donuts",
    description: "Soft, fluffy and light donuts filled with a silky smooth creme patisserie filling and topped with a thin, crispy caramel coating. A delicious combination of two beloved desserts.",
    category: "Doughnuts",
    prepTime: "3 hours",
    cookTime: "30 minutes",
    totalTime: "3 hours 30 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?w=600&h=400&fit=crop",
    ingredients: {
      "Tangzhong": ["4 tbsp milk (50g)", "1 tbsp flour (10g)"],
      "Dough": ["3/4 cup milk (180g)", "1.5 tsp yeast", "3 cups all purpose flour (400g)", "2 tbsp milk powder (15g)", "1/4 cup sugar (50g)", "1 large egg, room temperature", "5 tbsp softened butter, in 2 parts (70g)", "1/2 tsp salt"],
      "Creme Patisserie Filling": ["2 eggs", "1/2 cup sugar (110g)", "2 tbsp corn starch (20g)", "2 cups milk (460g)", "1/2 tsp salt", "1 tsp vanilla", "2 tbsp unsalted butter"],
      "Caramel Coating": ["1 cup sugar", "4 tbsp water", "Pinch of salt"]
    },
    instructions: ["Make the tangzhong by stirring the flour and milk in a nonstick pan over medium heat until they form a thick paste.", "Mix the tangzhong with cold milk and yeast in the bowl of your standing mixer and let sit for 5 minutes. The heat of the tangzhong will bring the overall temperature to lukewarm, ideal for the yeast.", "Add all the other ingredients for the dough, leaving out half of the butter. Knead at medium-high speed using a dough hook for 5 minutes until the dough starts to come together.", "Add the remaining butter and knead again for 5-8 minutes until a smooth and stretchy dough has formed. It should pull away from the edges of the bowl.", "Cover and let the dough rise for about 1 hour until it doubles in size (or overnight in the fridge, but don't rise at room temperature and then leave the dough in the fridge).", "Roll the dough into a 1/2 inch thick sheet. Cut out 4\" circles. Repeat until all the dough is used up.", "Place the circle donuts onto small pieces of parchment paper, and transfer them to a tray. Rest for about 30-45 minutes at room temperature.", "Heat 2-3 inches of oil in a wok over medium heat. Once it has reached 350F, carefully drop in a test donut, removing the parchment paper, and fry for about 2 minutes per side. Test for doneness and adjust timing as needed. Fry all donuts, and keep the raw donuts in a cool place as you fry so they don't overproof.", "Let the donuts cool down on a wire rack at room temperature while you make the creme patisserie.", "For the creme patisserie, whisk the eggs, corn starch, salt and sugar in a bowl.", "Place the milk and vanilla in a nonstick pan and bring to a boil.", "Carefully pour the milk mixture into the egg mixture while whisking continuously, then pour back the whole mixture into the pan.", "Cook on low heat while stirring constantly until you get a custard-like consistency. Add the butter and mix it in.", "Remove from heat and pass through a strainer to make sure there are no lumps. If the cream feels lumpy, blend it for 30 seconds to make it smooth.", "Place in the fridge for at least 15 minutes to cool down.", "Transfer the creme patisserie into a piping bag with a Bismarck tip. Carefully puncture the donuts and fill them with the custard until they feel heavy.", "For the caramel, mix the sugar, salt and water in a nonstick pan and place on low heat. This will take some time; try not to stir.", "Slowly the sugar will dissolve and start to caramelize. Once your caramel reaches a deep golden color, take it off the heat.", "While the caramel is still hot, carefully dip your donuts on one side so they get a thin caramel coating. If the caramel starts to harden, reheat it until it becomes runny again.", "The donuts should form a crispy coating once they cool.", "Serve and enjoy!"],
    tips: ["Careful temperature control during caramel dipping is important to prevent the coating from becoming too thick or hard.", "The tangzhong method creates extra-soft donuts.", "If the caramel starts to harden, reheat it until it becomes runny again before continuing to dip."]
  },
  {
    id: "burnt-basque-cheesecake",
    name: "Burnt Basque Cheesecake",
    description: "A crustless cheesecake featuring a caramelized, slightly burnt exterior with a creamy, custard-like interior. Simple to make with just a handful of ingredients.",
    category: "Cheesecakes",
    prepTime: "20 minutes",
    cookTime: "55 minutes",
    totalTime: "1 hour 20 minutes",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
    ingredients: {
      "Cheesecake": ["32 oz Philadelphia cream cheese (4 8-oz blocks / 905g)", "6 large eggs", "1 1/3 cups granulated sugar (290g)", "2 1/2 tbsp cornstarch (22g)", "1 1/2 cups heavy cream (360g)", "1/2 tsp salt", "1 tsp vanilla bean paste"],
      "Optional Chocolate Ganache": ["20g milk or semi-sweet chocolate", "20g heavy cream"]
    },
    instructions: ["Bring all ingredients to room temperature by removing from fridge at least one hour before starting.", "Pre-heat oven to 410°F (conventional, bottom heating).", "Prepare an 8x3\" cake pan: butter the bottom, then line with at least 2 large parchment sheets in opposite directions, with parchment rising above pan edges.", "Add cream cheese to stand mixer bowl and cream for 2-3 minutes with paddle attachment until creamy. Scrape edges and bottom thoroughly.", "Add sugar and mix for 2-3 minutes until dissolved. Scrape bowl and mix for additional 30 seconds.", "Break eggs into separate bowl. Add eggs one at a time while mixing at medium speed until incorporated. Do not overmix.", "Add heavy cream, vanilla, and salt and mix for 30 seconds.", "Sift in cornstarch and mix for 30-60 seconds until all ingredients are incorporated.", "Pour batter into prepared pan. Tap on counter several times to ensure batter flows into all creases.", "Place pan on middle oven rack and bake for approximately 55 minutes (checking around 50 minutes). In final 3-4 minutes, turn on broiler to develop deep golden crust. For fully set cheesecake, bake 60 minutes total.", "Remove from oven - cheesecake will be quite wobbly. Rest at room temperature for 5 minutes, then transfer to fridge immediately.", "Allow cheesecake to cool overnight in fridge. Serve cold directly from fridge.", "Optional: Prepare chocolate ganache by pouring hot cream over chopped chocolate, waiting 5 minutes, mixing until shiny. Pour over cheesecake slice while warm."],
    tips: ["Cannot substitute eggs in this recipe.", "Store covered with cling wrap or in airtight container; keeps 4-5 days refrigerated.", "Cheesecake can be made ahead and stored in fridge for 4-5 days."]
  },
  {
    id: "mango-lassi-tres-leches-cake",
    name: "Mango Lassi Tres Leches Cake",
    description: "A delectable Tres Leches cake made with a mango lassi three milk mixture and a mango lassi whipped cream, inspired by the South Asian drink. Perfect for summer.",
    category: "Cakes",
    prepTime: "1 hour",
    cookTime: "30 minutes",
    totalTime: "1 hour 30 minutes",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Biscuit Sponge Cake": ["4 eggs, room temperature, separated", "1/2 cup sugar", "1/4 cup sugar", "1/2 tsp vanilla", "1/4 tsp salt", "1/4 cup milk", "3/4 cup all-purpose flour", "2 tbsp cornstarch", "1.5 tsp baking powder", "1/4 tsp cream of tartar"],
      "Mango Lassi": ["1.5 cups chopped mango (frozen or fresh)", "1/2 cup plain yogurt", "3/4 cup milk", "2-4 tbsp sugar as needed", "Pinch of cardamom powder"],
      "Mango Three Milk Mixture": ["6 oz sweetened condensed milk", "6 oz evaporated milk (3/4 cup)", "1/2 cup milk", "Half of the mango lassi"],
      "Mango Lassi Whipped Cream": ["1.5 cups heavy whipping cream, chilled", "Half of mango lassi", "Additional whipped cream for decoration", "Fresh mango for decoration"]
    },
    instructions: ["Preheat oven to 350°F (conventional) and line a 9x13\" tray with parchment paper.", "To egg yolks, add 1/2 cup sugar, salt, and vanilla; whisk for 1-2 minutes until light and fluffy.", "Whisk in milk, then sift flour, cornstarch, and baking powder; whisk to combine without overmixing.", "Separately, add cream of tartar to egg whites and whisk on medium speed; once frothy, gradually add remaining 1/4 cup sugar while whisking until stiff, glossy meringue forms.", "Fold one-third of meringue into egg yolk mixture gently; add remaining meringue and fold in carefully.", "Transfer batter to pan and bake approximately 15 minutes until done.", "Let cake cool.", "Blend all mango lassi ingredients until smooth, then strain through fine mesh sieve; adjust taste if needed.", "Whisk all three milk mixture ingredients until combined; adjust sweetness if needed and ensure mixture is quite liquid (add more milk if too thick).", "Use skewer to poke holes throughout cake in pan; pour one-fourth of three milk mixture over and wait until absorbed. Continue adding remaining liquid in 2-3 steps, waiting between additions. Refrigerate several hours until fully absorbed.", "If milk mixture takes over an hour to soak in, dilute remaining mixture with more milk.", "Using balloon whisk attachment, whip heavy cream until thick; gradually add remaining mango lassi while whisking and tasting. Stop when firm peaks form.", "Spread thick layer of mango lassi whipped cream evenly on cake; decorate with additional whipped cream and fresh chopped mango.", "Serve cold."],
    tips: ["Cake can be prepared 1-2 days in advance and refrigerated; save decoration for before serving.", "Cream of tartar substitute: skip if unavailable; use white vinegar on bowl instead (wipe with paper towel), then add egg whites. Acidity helps stabilize egg whites.", "If three milk mixture doesn't absorb within 20 minutes after first addition, dilute with more milk."]
  },
  {
    id: "palestinian-knafeh",
    name: "Palestinian Knafeh",
    description: "A delicious Middle Eastern dessert made with crispy shredded phyllo pastry and sweet cheese soaked in sugar syrup. Golden, buttered kataifi layers surround a melted cheese filling.",
    category: "Middle Eastern",
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    totalTime: "45 minutes",
    servings: 15,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["1 lb Kataifi (shredded phyllo dough) - usually 1 pack", "3/4 cups ghee or butter + more to brush inside pan", "1 tsp Knafeh food color", "1 lb sweet cheese (or Queso Fresco or ricotta)", "1 lb fresh mozzarella, pressed dry", "1 1/2 cups sugar", "1 1/2 cups water", "Rosewater extract to taste", "Chopped pistachios for decoration"]
    },
    instructions: ["Prepare the cheeses. If using salted alternatives, soak in water for 2 hours first. Slice into 1/4\" pieces and press between paper towels to dry (skip drying step if using ricotta).", "Pre-heat oven to 450F and brush butter inside baking pan(s).", "In a large bowl, shred the kataifi into 1-3\" long strands.", "Mix ghee with food color and add to kataifi, rubbing thoroughly with hands to coat all strands.", "Add 3/4 of the kataifi to baking pan(s) and press down firmly, pushing some up the edges to create a tart-like casing.", "Add a layer of sweet cheese (crumbled by hand), then a layer of mozzarella (torn into large chunks). Press down both layers.", "Add remaining kataifi on top and press down.", "Bake for 20-25 minutes until golden and crispy on edges and bottom, becoming loose from the pan.", "Meanwhile, prepare syrup by mixing sugar, water, and rosewater extract in a saucepan. Bring to boil and simmer 1-2 minutes until sugar dissolves. Cool completely.", "Once baked, carefully turn Knafeh onto serving dish. Gently drench thoroughly with syrup using a large spoon.", "Decorate with chopped pistachios, slice, and serve immediately while warm or hot."],
    tips: ["The Knafeh is best enjoyed very warm or hot.", "Don't use salted butter or it will taste overly salty.", "All ingredients are typically available at local Arabic stores."]
  },
  {
    id: "easy-biscoff-tiramisu",
    name: "Easy Biscoff Tiramisu",
    description: "A delicious Biscoff dessert with layers of coffee-soaked Biscoff cookies and Biscoff mascarpone cream. Requires only 6 ingredients and 10 minutes of active work.",
    category: "Desserts",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    totalTime: "4 hours 10 minutes",
    servings: 8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Biscoff Mascarpone Cream": ["8 ounces good quality mascarpone cheese (226g)", "1/2 cup Biscoff cookie butter (140g)", "2 tbsp granulated sugar", "1/2 tsp vanilla (optional)", "Pinch of salt (optional)", "2 cups heavy whipping cream, chilled (480g)"],
      "Assembly": ["50-60 Biscoff cookies", "1 1/2 cups strong coffee or espresso"]
    },
    instructions: ["In a clean bowl, add the mascarpone cheese, Biscoff cookie butter, sugar, salt and vanilla. Whisk for 30-60 seconds until creamy. Avoid overmixing.", "Add cold heavy cream to the same bowl and whisk on medium speed for 1-2 minutes until stiff peaks form and mixture becomes pipeable.", "Dip Biscoff cookies in coffee for 1-2 seconds and add 2 layers to the bottom of serving dish/cups. Fill gaps with cut cookie pieces.", "Cover with half the Biscoff mascarpone cream, spreading evenly.", "Repeat with another 2 layers of soaked cookies and remaining cream mixture. Optional: reserve some cream to pipe on top.", "Refrigerate overnight or at least 4 hours until fully set.", "Decorate with crushed Biscoff cookies and drizzles of warmed cookie butter before serving."],
    tips: ["This dessert chills very well and can be prepared ahead of time.", "Store in refrigerator for 5-7 days.", "Can be made in an 8x8\" square pan or 8-9\" round dish instead of individual cups.", "Mascarpone can curdle if overmixed or if using low-quality brands."]
  },
  {
    id: "sticky-toffee-pudding-for-two",
    name: "Sticky Toffee Pudding for Two",
    description: "Soft and moist date cakes drenched in a sticky toffee sauce and served with whipped cream. A sweet, spicy, and indulgent fall dessert perfect for two.",
    category: "Desserts",
    prepTime: "30 minutes",
    cookTime: "25 minutes",
    totalTime: "1 hour",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["2 oz medjool dates (3-4 dates)", "1/4 cup boiling water", "1/4 tsp baking soda", "2 tbsp unsalted butter, softened", "1-2 tbsp brown sugar (14-28g)", "1/2 tsp vanilla", "1 egg yolk", "1/3 cup flour (43g)", "1/4 tsp baking powder", "1/8 to 1/4 tsp cinnamon", "1/8 tsp salt"],
      "Toffee Sauce": ["2 tbsp unsalted butter", "1/4 cup brown sugar", "1/2 cup cream", "Vanilla", "Salt"],
      "Serving": ["Plain whipped cream or ice cream"]
    },
    instructions: ["Pour boiling water over dates in a small bowl and add baking soda. Cover and soak for 20 minutes.", "Preheat oven to 350°F and coat 2 ramekins generously with butter.", "Blend the dates and water into a paste.", "In a separate bowl, whisk the butter with sugar and vanilla for 2-3 minutes until light, creamy, and fluffy.", "Add the egg yolk and whisk to combine.", "Fold in the date paste.", "Sift in the flour, baking powder, cinnamon, and salt. Gently fold to combine.", "Divide the batter equally between the 2 ramekins and spread evenly.", "Bake for approximately 25 minutes or until a toothpick inserted in the middle comes out with moist crumbs attached.", "While the cakes bake, add all sauce ingredients to a saucepan on the lowest heat setting. Stir and cook for about 10 minutes until the sauce thickens and coats the back of a spoon.", "Once the cakes are baked, remove from the oven and poke holes in them using the back of a toothpick.", "Pour about 2 tbsp of toffee sauce on each cake and let it soak.", "Turn out the cakes onto plates and serve with additional sauce and plain whipped cream (unsweetened).", "Enjoy!"],
    tips: ["Keep at room temperature in an airtight container for 1-2 days, or refrigerate for up to 5 days.", "Store sauce separately and pour on right before serving.", "Store cakes and sauce separately in airtight containers in the fridge for up to 5 days. When ready to eat, warm both in the microwave in 20-second bursts, pour sauce over cakes, and serve with cream."]
  },
  {
    id: "red-velvet-molten-lava-cakes",
    name: "Red Velvet Molten Lava Cakes",
    description: "Delectable and chocolatey red velvet cakes with a molten interior. Requires just 20 minutes and 8 ingredients to prepare for two.",
    category: "Cakes",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    totalTime: "20 minutes",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Lava Cakes": ["1/4 cup butter (56g)", "100g semi-sweet chocolate, chopped", "1 large egg", "1-2 tbsp granulated sugar", "Pinch of salt", "1/4 tsp vanilla", "2 tbsp all-purpose flour", "1-2 tsp red gel food color", "Butter to coat the ramekins"]
    },
    instructions: ["Pre-heat oven to 450°F (conventional) and prepare 2 6oz ramekins by generously brushing butter inside them.", "Add chocolate and butter to a heat-safe bowl, and microwave in 20 second increments until both have melted. Stir to combine.", "In a separate bowl, add the egg, sugar, salt and vanilla. Use an electric hand mixer to whisk for 2-3 minutes until the mixture is light, frothy and almost triple in volume.", "Pour the chocolate mixture into the egg mixture and whisk until just combined.", "Sift in the flour, and use a rubber spatula to gently fold until the flour is mixed in. Take care to be gentle and not to overmix.", "Add the red food color and gently fold. You can adjust the quantity based on how strong you want the color to be.", "Divide the batter between the two ramekins. Bake for approximately 10-11 minutes until the edges are done but the center is still molten.", "Let the cakes cool inside the ramekins for 1-2 minutes, then carefully turn them out onto your dessert plates. Dust with powdered sugar, and serve!"],
    tips: ["The molten center requires careful timing - the edges should be set while the center remains soft and oozing.", "Do not overmix the batter to maintain a light texture."]
  },
  {
    id: "no-bake-chai-tres-leches-cake",
    name: "No Bake Chai Tres Leches Cake",
    description: "A delightfully soft and moist no-bake Tres Leches cake with a delicate chai flavor. Takes only 7 ingredients and 15 minutes of active work with a ladyfinger base.",
    category: "Cakes",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    totalTime: "2 hours 15 minutes",
    servings: 8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop",
    ingredients: {
      "Chai Milk Mixture": ["240g milk (1 cup)", "2-4 tbsp chai (loose tea) depending on strength preference", "1/4 tsp cardamom powder", "300g sweetened condensed milk (roughly 3/4 of 14 oz can)", "400g evaporated milk (1 14 oz can)"],
      "Cake Structure": ["35-40 ladyfingers (about 1.5 packs with 24 ladyfingers each)"],
      "Topping": ["360g (1 1/2 cup) heavy cream for decoration", "Optional: freeze-dried strawberries and pistachios for decoration"]
    },
    instructions: ["Add milk, chai, and cardamom to saucepan and simmer on medium-low heat for 3-5 minutes to infuse the chai flavor.", "Prepare three-milk mixture by whisking together evaporated milk, sweetened condensed milk, and strained chai (squeeze out all milk). Taste and adjust flavor as desired.", "In a 7x11\" dish, stack ladyfingers tightly to create one layer, filling gaps by trimming ladyfingers as needed.", "Using a 1/4 cup measure, drench the ladyfingers, ensuring each one is soaked. Use half of the chai mixture for this layer.", "Wait 10-20 minutes for ladyfingers to absorb most of the chai mixture.", "Repeat with a second layer of ladyfingers and remaining chai mixture.", "Place the dish in the refrigerator for approximately 2 hours.", "Whip heavy cream to stiff peaks.", "Spread half of the whipped cream on top of the ladyfingers using an offset spatula to even it out.", "Pipe remaining cream in dollops using a French star tip.", "Decorate with crushed freeze-dried strawberries and chopped pistachios.", "Serve and enjoy."],
    tips: ["Tres Leches is a Spanish term that translates to 'three milks' and refers to the three milk types used in the soak.", "This cake should be kept in the fridge and keeps for 3-4 days, although it may start to feel a bit more soggy with time.", "Teabags can substitute for loose chai tea; dip and press to drain thoroughly."]
  },
  {
    id: "espresso-cake",
    name: "Espresso Cake",
    description: "An easy to make, moist and delicious coffee-flavored three-layer espresso cake with a luscious espresso cream cheese frosting. A coffee lover's dream dessert.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "2 hours 30 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=400&fit=crop",
    ingredients: {
      "Espresso Cake": ["2 1/2 cups all-purpose flour (325g), sifted", "1.5 tsp baking powder", "1.5 tsp baking soda", "1 cup granulated sugar (200g)", "1/2 cup light brown sugar (100g)", "1 tsp salt", "3 large eggs", "2/3 cup vegetable oil (133g)", "1/3 cup buttermilk (80g); or mix 1/3 cup whole milk + 1 tsp vinegar", "1 cup sour cream (240g)", "1 tsp vanilla", "2-3 tbsp instant coffee", "3/4 cup boiling water (180g)"],
      "Espresso Cream Cheese Frosting": ["1 1/4 cup unsalted butter, softened (2.5 sticks or 283g)", "20 oz cream cheese, room temperature (2.5 8-oz blocks or 570g)", "1 tsp vanilla", "1/2 tsp salt", "2 tbsp instant coffee + 1 tbsp hot water", "3-4 cups icing sugar, sifted (360-480g)"]
    },
    instructions: ["Pre-heat oven to 350°F (conventional, no fan) and line 3 8\" cake pans with parchment paper.", "Add flour, baking powder, baking soda, granulated sugar, brown sugar, and salt to a bowl and whisk until combined with no lumps remaining.", "Add eggs, oil, buttermilk, sour cream, and vanilla to the same bowl; use a hand whisk to gently stir until wet ingredients combine with dry and no lumps remain (do not overmix).", "Mix instant coffee with boiling water in a separate bowl/cup and pour into batter; very gently fold until a smooth espresso cake batter forms.", "Divide batter evenly between the three lined pans.", "Bake at 350°F for approximately 20 minutes until a toothpick inserted in the middle comes out with light, moist crumbs attached.", "Let cakes cool in pans for at least 20 minutes, then carefully turn them out; cover with cling wrap and chill in the fridge for 30-60 minutes before frosting.", "Ensure butter and cream cheese are fully softened at room temperature; add them to stand mixer bowl with paddle attachment.", "Add vanilla, salt, and instant coffee mixed with hot water; whisk on medium-low speed for 2-3 minutes until the mixture becomes smooth and creamy, scraping bowl 2-3 times.", "Keeping mixer on low speed, add sugar one cup at a time until frosting reaches desired consistency and sweetness (do not whisk too long as it will become runny).", "If frosting is too soft, refrigerate for 10-20 minutes so it firms up.", "Once cakes have cooled, carefully trim off domes and layer them with generous amounts of frosting between each layer.", "Cover with a thin layer of frosting on top and sides (crumb coat) and refrigerate for approximately 20 minutes so the coat sets; then cover with remaining frosting.", "Decorate the cake as desired with piped frosting, instant coffee powder and/or coffee beans.", "Slice, serve, and enjoy."],
    tips: ["If your cake is dense or dry, you have most likely added too much flour. Use a weighing scale for accuracy; fluff flour before measuring if using cups.", "Since this cake is very moist and soft, handle carefully when hot. Cool for at least 20 minutes in pans, then chill 30-60 minutes more before frosting.", "Instant coffee is recommended for consistent results, but you may replace the instant coffee and hot water with 3/4 cup very strong, hot brewed coffee for the cake batter.", "Insert a toothpick in the middle to test doneness; it should come out with light, moist crumbs attached.", "You can divide batter into 2 8\" or 9\" pans instead of 3; however, cakes will bake longer and dome more.", "Divide all quantities by 2 and bake in 3 6\" pans to make a half-sized cake.", "This can be made as a 9x13\" sheet cake with frosting on top; adjust baking time based on toothpick test.", "Keep this espresso cake in an airtight container (or covered with cling wrap) in the fridge for 5-7 days."]
  },
  {
    id: "no-bake-biscoff-salted-caramel-cheesecake",
    name: "No Bake Biscoff Salted Caramel Cheesecake",
    description: "A delectable, creamy and ultra easy no-bake Biscoff cheesecake with a Biscoff cookie crust and a layer of salted caramel sauce in the middle.",
    category: "Cheesecakes",
    prepTime: "30 minutes",
    cookTime: "0 minutes",
    totalTime: "Overnight",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop",
    ingredients: {
      "Crust": ["200g Biscoff cookies (about 26 cookies)", "85g unsalted butter, melted (6 tbsp)"],
      "Salted Caramel Filling": ["15 soft or chewy caramels", "1-2 tbsp cream", "1/3 tsp salt"],
      "Cheesecake Filling": ["3 8oz packs cream cheese (680g), room temperature", "1/3 cup sugar (75g)", "1 tsp vanilla", "1 cup Biscoff cookie butter (240g)", "1 cup heavy cream (240g)"],
      "Topping": ["1/2 cup Biscoff cookie butter, melted"]
    },
    instructions: ["Prep a 9\" springform pan by brushing it with butter.", "Grind the cookies with the melted butter in a food processor until they form a smooth crumb.", "Transfer the crumbs to the pan and press down tightly to create a crust; place in the fridge to set.", "To make the salted caramel, place the ingredients in a nonstick pan and cook on low heat until melted together; set aside.", "Whisk the cream cheese with the sugar and vanilla until creamy and the sugar feels dissolved (1-2 minutes).", "Add the Biscoff cookie butter and mix until combined.", "Separately, whip up the heavy cream until it reaches stiff peaks.", "Gently fold the whipped cream into the cheesecake batter using a rubber spatula until fully combined.", "Transfer half of the cheesecake batter into the pan with the crust, and spread out with a spatula.", "Pour over the salted caramel sauce (it should be pourable but not hot) and spread it out; leave 1\" empty around the edges so the caramel does not flow out.", "Place in the fridge for 10 minutes so the caramel firms up.", "Add the remaining cheesecake batter on top of the caramel, and spread out gently, avoiding disrupting the caramel layer.", "Smooth out the top with an offset spatula.", "Cover and refrigerate overnight until the cheesecake is set.", "Carefully remove the cheesecake from the springform pan and place on a serving stand.", "Warm up the Biscoff cookie butter in the microwave until it reaches a pourable consistency (just 10-20s) and pour on top; spread out and decorate with crushed Biscoff cookies.", "Serve and enjoy."],
    tips: ["Can be made ahead of time and kept in the fridge for 5-7 days (add crushed cookies right before serving).", "Store in an airtight container in the fridge for 5-7 days.", "Can substitute any caramel sauce instead of homemade.", "Can skip the salted caramel entirely and make a plain Biscoff cheesecake."]
  },
  {
    id: "strawberry-cheesecake-cookies",
    name: "Strawberry Cheesecake Cookies",
    description: "Better-than-Crumbl delicious graham cracker cookies filled with a luscious cheesecake filling and topped off with a strawberry glaze.",
    category: "Cookies",
    prepTime: "45 minutes",
    cookTime: "12 minutes",
    totalTime: "57 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Graham Cracker Cookies": ["12 tbsp unsalted butter, room temperature (170g)", "1/3 cup granulated sugar (67g)", "2/3 cup brown sugar, packed (133g)", "1 egg", "1 egg yolk", "1 1/2 tsp vanilla", "1/2 cup crushed graham crackers (50g)", "1 3/4 cups all purpose flour (227g)", "1/2 tsp baking powder", "1/4 tsp baking soda", "1/2 tsp salt"],
      "Cheesecake Filling": ["8 oz cream cheese, room temperature (226g)", "2/3 cup heavy whipping cream, chilled (160g)", "1/4 cup sugar (50g)", "1/2 tsp vanilla", "Pinch of salt", "1-2 tbsp lemon juice (or to taste)"],
      "Strawberry Glaze": ["3 tbsp strawberry jam", "2 tbsp water", "1/2 tbsp sugar", "1 tsp cornstarch"]
    },
    instructions: ["Bring the butter and eggs to room temperature if you haven't already.", "Add the butter, granulated sugar and brown sugar to a bowl. Whisk for 2-3 minutes until the mixture looks light in color, and fluffy and creamy in texture.", "Add the egg, egg yolk and vanilla, and whisk for another minute or so until the mixture looks smooth and creamy.", "Add the crushed graham crackers and whisk until combined.", "In a separate bowl, sift in the flour, baking powder, baking soda, and salt. Whisk to combine.", "Add the dry ingredients to the wet in 2-3 additions. Use a rubber spatula to fold them in, going around and pressing down gently. Stop folding as soon as the dry ingredients are combined and no streaks of flour can be seen.", "Use a 2\" cookie scoop to scoop the dough into 12 balls. Gently roll them out between your palms to smooth them, then keep in the fridge for 30 minutes.", "In the last 15 minutes of the chilling, pre-heat your oven to 375F (conventional) and prep 1-2 large cookie sheets with parchment paper.", "Once chilled, transfer the cookie dough balls to the baking sheets, keeping at least 3\" between them.", "Bake in the preheated oven at 375F for 12-13 minutes until the cookies feel set around the edges but still somewhat soft in the middle.", "As soon as the cookies come out of the oven, use the back of a tablespoon measure to press down on the middle and create little pockets/thumbprints. Then let the cookies fully cool down.", "Whisk the cream cheese, heavy cream, sugar, salt, vanilla and lemon juice on medium low speed until the mixture becomes creamy and starts to thicken up. Do not overmix.", "Transfer to a piping bag fit with a round piping tip. Keep chilled.", "Stir all ingredients for the glaze together in a small saucepan.", "Cook and stir over low heat until the mixture starts to thicken up.", "Remove from heat and let cool down slightly.", "Once the cookies have cooled down, pipe a generous swirl of the cheesecake filling onto each.", "Drizzle over the strawberry glaze.", "Serve and enjoy!"],
    tips: ["You may skip chilling the cookie dough balls and bake straight away, though they will spread more and be less chewy.", "Prepare cookie dough balls and cheesecake filling separately in the fridge. Bake cookies when ready (add 1-2 minutes), then assemble and glaze before serving.", "Keep remaining cookies in an airtight container in the fridge for up to 3 days."]
  },
  {
    id: "cheesecake-croissant-buns",
    name: "Cheesecake Croissant Buns",
    description: "Crispy, flakey croissant cups filled with a rich no-bake cheesecake filling and topped with a homemade raspberry glaze and crushed graham crackers. Inspired by Buns From Home London.",
    category: "Pastries",
    prepTime: "3 hours",
    cookTime: "35 minutes",
    totalTime: "6 hours",
    servings: 9,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Croissant Dough": ["70g milk", "5g yeast (1.5 tsp)", "50g water", "125g all purpose flour", "125g bread flour", "7g salt (1 tsp)", "25g granulated sugar", "1 tsp honey (7g)", "50g butter, softened", "130g butter for lamination (high quality, 82%+ butter fat)"],
      "Shaping": ["1 egg + 1 tbsp milk for egg wash"],
      "Cheesecake Filling": ["350g cream cheese (12oz), room temperature", "100g sugar", "1 tsp vanilla", "1/4 tsp salt", "2-3 tbsp lemon juice", "130g sour cream", "130g heavy cream, chilled & whipped to medium peaks"],
      "Raspberry Glaze": ["4 tbsp raspberry jam", "2 tbsp water", "1 tbsp sugar", "2-3 graham crackers for topping"]
    },
    instructions: ["Combine all dough ingredients except 50g butter and 130g butter; knead with hook attachment for 5-7 minutes on medium-high speed.", "Add 50g softened butter and knead for 5 minutes until incorporated.", "Cover dough and let rise for about 1 hour at room temperature.", "Roll into 5.5\"x11\" rectangle, wrap in cling wrap, freeze 5 minutes, then refrigerate 30 minutes.", "Place 130g butter between parchment paper folded to 5x5\" square; beat with rolling pin to flatten evenly into a square block.", "Refrigerate butter for 15 minutes.", "Encase butter square into dough rectangle and fold dough to seal butter on all edges neatly.", "Roll out gently into large rectangle about 1cm thick. Fold top to middle, then bottom (single turn), keeping short edge toward you.", "Refrigerate 10-15 minutes. Roll out to about 7mm thick and perform double turn: fold both short edges to middle until they meet, then fold in half (4 layers).", "Refrigerate 30-60 minutes, then roll into 9x16\" rectangle.", "Brush butter on upside-down muffin pan.", "Remove 3\"x16\" of croissant sheet and place in fridge.", "Divide remaining 6\"x16\" into 9 strips along length.", "Gently stretch each strip and roll around each muffin cup from bottom upward, pressing gently to hold shape.", "Cut remaining 3x16\" sheet into two 3\"x8\" sheets; roll each into log along length like cinnamon roll, then divide into 9-10 equal circular pieces.", "Working one piece at a time, flatten circle on cold surface and roll until slightly larger than cup base; place on cup and stretch to seal with earlier strips (keep remaining pieces in fridge).", "Proof cups at room temperature (75F) for about 2 hours until puffed.", "Preheat oven to 350F in last 15 minutes.", "Brush cups generously with egg wash; bake 20 minutes, then place weight on cups to flatten; bake another 10-15 minutes with weight.", "Whisk cream cheese and sugar together until fully combined.", "Add sour cream, lemon juice, vanilla, and salt; whisk until combined.", "Whisk heavy cream until stiff peaks form.", "Fold whipped cream into cream cheese mixture until combined.", "Heat raspberry jam with water and sugar on low heat until thick glaze forms; cool 5-10 minutes.", "Transfer cheesecake mixture to piping bag with large opening; fill croissant cups evenly.", "Drizzle 1-2 tablespoons glaze on top and cover with crushed graham crackers.", "Refrigerate 2-3 hours before serving."],
    tips: ["Use high-quality butter with at least 82% butter fat for lamination (Kerrygold recommended).", "Keep remaining dough/pastry pieces refrigerated while working to prevent warming.", "Weight on cups during final baking helps flatten them evenly.", "Must refrigerate filled buns for 2-3 hours before serving."]
  },
  {
    id: "no-bake-dubai-chocolate-cheesecake",
    name: "No Bake Dubai Chocolate Cheesecake",
    description: "A delicious, easy and creamy no-bake pistachio cheesecake with a chocolate cookie crust, crispy pistachio knafeh layer and chocolate ganache. An elegant multi-layered dessert.",
    category: "Cheesecakes",
    prepTime: "45 minutes",
    cookTime: "0 minutes",
    totalTime: "Overnight",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45adb?w=600&h=400&fit=crop",
    ingredients: {
      "Crust": ["25 chocolate creme cookies (285g)", "5 tbsp unsalted butter, melted (70g)"],
      "Pistachio Knafeh": ["3 cups shredded kataifi (100g)", "4 tbsp unsalted butter (56g)", "1/2 to 2/3 cup pistachio cream (140-185g)", "Pinch of salt", "1 cup heavy cream (240g)"],
      "Chocolate Ganache": ["200g dark or semi-sweet chocolate", "1 cup heavy cream (240g)"],
      "Pistachio Cheesecake": ["24 oz cream cheese, room temperature (680g)", "1/2 cup granulated sugar (100g)", "1 tsp vanilla", "1/2 tsp salt", "1/2 to 2/3 cup pistachio cream (140-185g)", "1 cup heavy whipping cream, chilled (240g)"]
    },
    instructions: ["Line a 9\" springform pan with parchment paper.", "Grind chocolate cookies and melted butter in food processor until fine crumb forms.", "Press crumb tightly and evenly into pan bottom; freeze 10 minutes.", "Toast shredded kataifi in unsalted butter over medium-low heat for approximately 10 minutes until golden and crispy, breaking clumps and preventing burning.", "Mix in pistachio cream and salt to taste.", "Spread mixture over crust evenly; freeze 10 minutes.", "Microwave cream and chocolate together in 20-second increments, stirring between, until smooth ganache forms.", "Pour half the ganache over knafeh layer; tilt pan to spread evenly; freeze until firm; reserve remaining ganache.", "Beat cream cheese, sugar, salt, and vanilla with paddle attachment for 3-5 minutes on medium speed until creamy.", "Add pistachio cream; whisk on low speed until combined, being careful not to overmix.", "In separate bowl, whisk heavy cream until stiff peaks form; do not overmix.", "Gently fold whipped cream into cheesecake batter slowly and carefully with rubber spatula to preserve air.", "Spread cheesecake batter over ganache layer; even with offset spatula.", "Refrigerate overnight (minimum 6 hours).", "Carefully remove from pan; transfer to serving stand.", "Warm remaining ganache; pour over cheesecake; spread, letting some drip down edges.", "Optional: drizzle melted white chocolate and pistachio cream; add chopped pistachios.", "Serve and enjoy."],
    tips: ["Use Pisti pistachio cream for the best results. Homemade pistachio cream takes a lot of work and often doesn't have the same flavor or texture.", "This cheesecake stays good in the fridge for 3-5 days, though it is best served within 1-2 days of preparing."]
  },
  {
    id: "kanafeh-cheesecake",
    name: "Kanafeh Cheesecake",
    description: "A Middle Eastern fusion dessert combining crispy, golden kanafeh pastry with rich New York-style cheesecake, topped with Arabic cream and a cinnamon-cardamom sugar syrup.",
    category: "Cheesecakes",
    prepTime: "40 minutes",
    cookTime: "1 hour 30 minutes",
    totalTime: "14 hours 10 minutes",
    servings: 1,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=400&fit=crop",
    ingredients: {
      "Cheesecake Layer": ["2 pounds cream cheese, softened", "1¼ cups granulated sugar", "½ cup sour cream", "1 teaspoon lemon juice (optional)", "1½ teaspoons vanilla extract", "4 large eggs", "Boiling water for water bath"],
      "Sugar Syrup": ["2 cups granulated sugar", "1 cup water", "Squeeze of lemon", "1 cinnamon stick", "2 cardamom pods, cracked"],
      "Kanafeh Topping": ["⅓ cup plus 1 teaspoon butter/ghee", "½ cup granulated sugar", "170g kunafa pastry"],
      "Kanafeh Bottom Crust": ["⅓ cup plus 1 teaspoon butter/ghee", "50g granulated sugar", "170g kunafa pastry"],
      "Topping & Garnish": ["1 cup keshta/clotted cream", "¼ cup chopped pistachios", "Edible pearls or sprinkles (optional)"]
    },
    instructions: ["Preheat oven to 325°F. Prepare springform pan with parchment and foil seal for water bath.", "Beat softened cream cheese until smooth; add sugar and mix well.", "Incorporate sour cream, lemon juice, and vanilla until combined.", "Add eggs one at a time, mixing carefully to avoid overmixing; strain if lumpy.", "Pour batter into prepared pan; place in roasting pan filled with boiling water halfway up sides.", "Bake 55-70 minutes until outer edges set but center jiggles slightly; internal temp should reach 165°F.", "Cool gradually in turned-off oven with door cracked for one hour.", "Transfer to wire rack, run knife around edges, cool completely.", "Wrap and freeze at least 6 hours or overnight.", "For syrup: combine sugar, water, lemon, cinnamon, and cardamom; boil then simmer 10 minutes. Cool completely.", "Crumble semi-frozen kanafeh into small pieces; toast with butter and sugar over medium heat, stirring constantly for 10 minutes until golden and crunchy.", "Remove frozen cheesecake from pan; set aside covered in freezer.", "For bottom crust: shred kanafeh, coat with butter and sugar, press firmly into pan.", "Bake crust 20 minutes until golden; immediately drizzle with ¼ cup syrup while hot. Cool completely.", "Slide kanafeh crust onto serving platter.", "Place frozen cheesecake on top of crust.", "Spread keshta/clotted cream over cheesecake layer.", "Pile toasted kanafeh shreds on top in mountain fashion.", "Garnish with pistachios and edible pearls.", "Allow 4 hours to defrost at cool room temperature before serving.", "Drizzle extra syrup on individual slices; serve same day for optimal crunch."],
    tips: ["Cheesecake can be made several days ahead and frozen.", "Best enjoyed the day assembled to maintain kanafeh crunchiness.", "Leftovers keep refrigerated several days but lose some crunch.", "Omit sugar from bottom crust if it becomes too hard after baking.", "Can halve cheesecake recipe for thinner layer; reduce bake time to ~45 minutes."]
  },
  {
    id: "triple-pistachio-kunafa-ice-cream-cake",
    name: "Triple Pistachio Kunafa Ice Cream Cake",
    description: "A Middle Eastern-inspired frozen dessert featuring scented eshta no-churn ice cream with caramelized pistachio pieces, swirled pistachio butter, and a vibrant green pistachio kunafa topping.",
    category: "Ice Cream",
    prepTime: "50 minutes",
    cookTime: "10 minutes",
    totalTime: "7 hours",
    servings: 9,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop",
    ingredients: {
      "Caramelized Pistachios": ["1/4 cup (50g) granulated sugar", "1 tablespoon (15ml) water", "1/2 cup (57g) shelled pistachios", "Pinch of ground cinnamon"],
      "Scented Eshta Ice Cream": ["1 cup (227g) fresh eshta/ashta (Arabic clotted cream)", "1 (397g) can sweetened condensed milk", "1 tablespoon orange blossom water", "1 teaspoon rose water", "2 cups (473ml) heavy whipping cream, very cold", "1/3 cup (85g) pistachio butter"],
      "Pistachio Kunafa Topping": ["125g kunafa (kadaif/kataifi) dough, frozen or fresh", "1/4 cup plus 1 teaspoon (62g) unsalted butter", "5 tablespoons (72g) powdered sugar", "1/3 cup (70g) pistachios, finely ground", "3 tablespoons pistachios, sliced or chopped"],
      "Garnish (Optional)": ["2 tablespoons pink-tinted sugar syrup", "Sugared rose petals"]
    },
    instructions: ["Combine sugar and water in a light-colored saucepan without stirring; simmer over medium-high heat while swirling pan to dissolve sugar. Cover briefly to prevent crystallization, then continue cooking until amber colored.", "Remove from heat and immediately stir in pistachios and cinnamon until evenly coated.", "Transfer caramelized pistachios to parchment paper, spread evenly, and cool completely.", "Once cooled, break into chunks with hands or chop coarsely.", "Line a 9x5 inch loaf pan with parchment paper or plastic wrap, covering all surfaces including corners.", "Whisk together eshta, sweetened condensed milk, rose water, and orange blossom water in a large bowl until smooth and well combined.", "In a chilled bowl, beat heavy whipping cream with an electric mixer until stiff peaks form; avoid overbeating.", "Gently fold whipped cream into the eshta mixture using a rubber spatula until color is even and no streaks remain.", "Fold in cooled caramelized nuts. Using a piping bag, pipe approximately one-quarter of the pistachio butter in random lines over the mixture surface without mixing.", "Pour one-third of ice cream mixture into prepared pan. Drizzle half the remaining pistachio butter over surface and swirl with a skewer. Layer remaining ice cream and pistachio butter with swirling, finishing with final ice cream layer. Smooth top and cover with plastic wrap directly on surface.", "Freeze until firm, at least 6 hours or preferably overnight. Pour any leftover mixture into ice cream bar molds.", "While ice cream freezes, crumble frozen kunafa into small pieces between hands (kunafa shreds easiest when frozen).", "Heat butter in large skillet over medium-high heat until melted. Add shredded kunafa and stir well until evenly coated. Continue stirring constantly for approximately 5 minutes until lightly golden and very crunchy, avoiding dark burn marks.", "Stir in powdered sugar until dissolved.", "Remove from heat and add ground and sliced pistachios, stirring until homogenous and well combined. Transfer to bowl and cool completely before use. Store in freezer-safe bag for up to one month.", "Remove frozen ice cream from freezer and invert onto serving platter. Peel away parchment or plastic lining.", "Drizzle with pink sugar syrup if desired. Top with pistachio kunafa and garnish with sugared rose petals.", "Slice and serve immediately. Store leftovers in freezer for about one month."],
    tips: ["Eshta (ashta) may be substituted with mascarpone cheese.", "Ready-made pistachio butter is available commercially, or prepare at home by processing toasted pistachios.", "The sugar syrup adds visual appeal but increases sweetness; consider omitting for personal preference.", "For simplified preparation, freeze mixture in a bowl and serve directly without unmolding.", "The vivid green color comes entirely from premium pistachios typically found in Turkey, Iran, and Arabian Gulf regions -- no artificial coloring used.", "All measurements are by weight for accuracy; kitchen scale recommended for best results."]
  },
  {
    id: "ricotta-cheese-kunafa",
    name: "Ricotta Cheese Kunafa",
    description: "The easiest, quickest and most versatile kunafa with a sweet and tangy creamy ricotta cheese filling, signature crunchy crust and lightly scented sugar syrup.",
    category: "Middle Eastern",
    prepTime: "20 minutes",
    cookTime: "45 minutes",
    totalTime: "1 hour 20 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Scented Sugar Syrup": ["2 cups (400g) granulated sugar", "1 cup water", "Squeeze of fresh lemon juice (about 1 teaspoon)", "1/2 cinnamon stick (optional)", "2 cardamom pods, smashed open (optional)"],
      "Cheese Filling": ["500g good quality, creamy ricotta cheese", "1/4 cup (60g) Arabic-style clotted cream (eshta/ashta)", "1 tablespoon (13g) granulated sugar (optional)", "1/2 teaspoon vanilla extract"],
      "Kunafa Crust": ["1 lb/500g kunafa or kataifi/kadaifi pastry", "1 cup (8oz/227g) ghee or butter, melted"],
      "Garnish": ["Pistachios (optional)", "Dried rose petals (optional)"]
    },
    instructions: ["Combine sugar, water, and lemon juice in a saucepan over high heat; avoid stirring to prevent crystallization until boiling.", "Reduce heat to medium-low, add cinnamon and cardamom, and simmer gently for 10 minutes until syrup thickens.", "Remove from heat and cool to room temperature; remove spices if preferring subtle flavor.", "Mix ricotta cheese, sugar (if using), cream, and vanilla in a medium bowl.", "Preheat oven to 200°C/390°F with rack in lower-middle position.", "Generously grease a 12-inch round cake pan with ghee or butter.", "Shred kunafa dough into 1-inch pieces; freeze fresh kunafa for one hour before cutting.", "Pour melted ghee over kunafa and mix evenly by hand until all strands are well-coated.", "Transfer two-thirds kunafa to prepared pan, spread on bottom and sides, creating walls; compress tightly with cup bottom.", "Spoon cheese filling over kunafa and spread evenly.", "Scatter remaining kunafa over cheese filling and lightly press to level.", "Bake 40-45 minutes until top and sides are deep golden brown.", "Immediately pour cooled syrup over hot kunafa in circular motion from edges to center.", "Rest 5-10 minutes for syrup to soak in, then flip onto serving platter.", "Garnish with pistachios and rose petals if desired; serve hot or at warm room temperature."],
    tips: ["Quality ricotta is essential; use creamy varieties with soft curds, avoiding gritty or mealy textures.", "Ghee yields crunchier crust than butter; clarified butter works as alternative.", "Can assemble earlier and refrigerate covered before baking.", "Freeze assembled kunafa unbaked with plastic wrap and foil for later preparation.", "Can use larger pans or split across multiple smaller pans; adjust baking time accordingly."]
  },
  {
    id: "toasted-milk-basbousa-with-cream",
    name: "Toasted Milk Basbousa with Cream",
    description: "A uniquely delicious basbousa cake featuring toffee and caramel notes from toasted milk powder, filled with a creamy center and soaked with sweetened condensed milk for an elevated dessert experience.",
    category: "Middle Eastern",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    totalTime: "2 hours",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Basbousa Base": ["1 1/2 cups (150g) powdered milk, divided", "1 cup (166g) semolina, medium grind", "3/4 cup (167g) melted ghee (or oil or half oil, half ghee)", "1/2 cup (100g) granulated sugar", "1 (160g) can cream (eshta/ashta)", "1/2 cup (155g) sweetened condensed milk", "3 tablespoons milk (plus 3 more tablespoons for thinning top batter)", "2 teaspoons baking powder", "1/4 teaspoon salt"],
      "Cream Filling": ["1 cup whole milk", "1 cup whipping cream", "1 tablespoon (12g) granulated sugar", "3 tablespoons (21g) cornstarch"],
      "Topping": ["3/4 cup condensed milk (remaining from 14oz/397g can)", "1/2 cup (50g) toasted milk powder", "Pistachios (optional)"]
    },
    instructions: ["Preheat oven to 180°C/350°F with rack in middle position.", "Toast full amount (150g) of powdered milk in medium skillet over medium heat, stirring constantly, until deep golden brown; approximately 10 minutes.", "Remove 1/2 cup (50g) of toasted milk powder for later use; set aside.", "Combine semolina and melted ghee in large bowl until well blended; allow to rest.", "Place remaining 1 cup (100g) toasted milk powder in medium bowl with sugar, canned cream, sweetened condensed milk, 3 tablespoons milk, baking powder, and salt; whisk until well combined.", "Pour toasted milk mixture over semolina/ghee mixture and stir until fully integrated.", "Transfer half of batter (445g) to greased 13x9 inch baking dish and spread evenly; set aside.", "Add 3 tablespoons milk to remaining batter and thin to pourable consistency; transfer to piping bag with 1 cm opening.", "Bake base layer for 10-12 minutes until set but not fully baked.", "Prepare cream filling: whisk together milk, whipping cream, sugar, and cornstarch off heat until cornstarch dissolves completely.", "Heat cream mixture over medium-high heat, whisking constantly until boiling; continue cooking 30 seconds until thickened.", "Pour cream filling over baked base layer and spread evenly; refrigerate 5 minutes to set slightly while remaining warm.", "Pipe thinned batter in lines across cream surface to cover completely; smooth carefully.", "Bake again for 20-25 minutes until surface feels set to touch.", "Remove from oven and immediately pour remaining condensed milk over surface; spread evenly and allow to absorb (~20 minutes).", "Cool to room temperature, then sift reserved toasted milk powder evenly over surface; draw diagonal lines with small spoon and garnish with pistachios if desired.", "Serve at room temperature or slightly warm; store covered in refrigerator for up to two days."],
    tips: ["Use weight measurements for maximum accuracy with a kitchen scale.", "Do not rush the milk powder toasting process or use high heat to prevent scorching.", "Clarified butter may be substituted for ghee if preferred.", "Sour cream or clotted cream may work as alternatives to canned eshta cream (untested).", "Best enjoyed the same day; reheat slightly before serving leftovers.", "This represents an Arabian Gulf-style basbousa variation, distinct from traditional Egyptian versions."]
  },
  {
    id: "pistachio-baklava",
    name: "Pistachio Baklava",
    description: "Thirty crisp layers of buttery phyllo and heaps of fragrant pistachios combine to make an utterly delicious, light yet rich baklava that delivers authentic Turkish bakery quality at home.",
    category: "Middle Eastern",
    prepTime: "45 minutes",
    cookTime: "1 hour 30 minutes",
    totalTime: "10 hours 15 minutes",
    servings: 40,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["1¾ cups (350g) granulated sugar", "¾ cup water", "1½ tablespoons (28g) glucose syrup (optional)", "A squeeze of lemon", "⅛ teaspoon table salt", "1 tablespoon orange blossom water"],
      "Nut Filling": ["3 cups (340g) shelled, raw unsalted pistachios, plus extra for garnish"],
      "Pastry": ["2 packages (500g each) phyllo dough (30 sheets total, thawed)", "1⅛ cup (255g) melted ghee or clarified butter"]
    },
    instructions: ["Combine sugar, water, glucose syrup, lemon, and salt in saucepan; bring to boil over medium-high heat, stirring occasionally until sugar dissolves. Remove from heat and stir in orange blossom water. Transfer to measuring cup and cool completely.", "Cool syrup can be refrigerated in airtight container up to 4 days; bring to room temperature before using.", "Adjust oven rack to lower-middle position and heat to 150°C/300°F.", "Pulse pistachios in food processor until very finely chopped (about fifteen 1-second pulses); transfer to bowl.", "Brush 13x9-inch baking pan with ghee. Unwrap and unfold phyllo on cutting board, smooth with hands, and trim to fit pan using it as guide. Cover phyllo with plastic wrap topped with damp kitchen towel.", "Place 1 phyllo sheet in prepared pan and brush completely with ghee. Layer 7 more sheets, brushing each with ghee (total 8 layers). Top with 1 cup ground pistachios, spread evenly.", "Layer 6 more phyllo sheets with ghee between each, then top with 1 cup pistachios. Repeat with 6 more sheets, ghee, and remaining cup of pistachios.", "Layer remaining 10 phyllo sheets (using nicest, most intact sheets), brushing each layer except final layer with ghee. From center outward, compress layers with palms to release air pockets. Cut baklava into diamonds (5 vertical cuts, about 8 diagonal cuts). Brush remaining ghee over surface.", "Bake until golden and crisp, approximately 1½ to 1¾ hours, rotating pan halfway through baking.", "Immediately after removing from oven, pour cooled syrup over cut lines until about 2 tablespoons remain; drizzle remaining syrup over surface. Garnish center of each piece with pinch of ground pistachios.", "Cool to room temperature on wire rack (about 3 hours), then cover with foil and let stand at least 8 hours before serving. Baklava can be wrapped tightly in foil and kept at room temperature up to 10 days."],
    tips: ["Thaw phyllo fully before using (refrigerate overnight or countertop 4-5 hours; do NOT microwave).", "Always keep unused phyllo covered with plastic wrap and damp towel.", "Use nicest, intact sheets for bottom and top layers; save torn sheets for middle layers.", "Baklava tastes best after sitting 8 hours; flavor and texture improve with standing time.", "Glucose syrup reduces crystallization for longer shelf life.", "Orange blossom water complements pistachios but can be reduced or omitted.", "To clarify butter: melt 1½ cups butter slowly over medium-low heat until milk solids separate. Remove from heat, settle 10 minutes, skim foam, pour clear butterfat into bowl. Yields approximately 1⅛ cup."]
  },
  {
    id: "cinnamon-baklava-rolls",
    name: "Cinnamon Baklava Rolls",
    description: "Bite-sized baklava rolls made with scrunched layers of phyllo, a three nut mixture, cinnamon, spice and everything nice. These addictive pastries are crispy, nutty, and soaked in spiced syrup.",
    category: "Middle Eastern",
    prepTime: "40 minutes",
    cookTime: "1 hour 10 minutes",
    totalTime: "2 hours 20 minutes",
    servings: 68,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["250g (1¼ cup) granulated sugar", "150g (⅔ cup) water", "28g (1½ tablespoons) glucose syrup (optional)", "1 cinnamon stick", "4 whole cloves", "Small squeeze of lemon juice"],
      "Baklava Rolls": ["200g melted ghee or clarified butter", "50g walnuts", "50g blanched almonds", "50g pistachios", "¾ teaspoon ground cinnamon", "1 (500g/1 lb) package phyllo dough", "Ground pistachio for garnish (optional)"]
    },
    instructions: ["Prepare syrup by combining sugar, water, glucose syrup, cinnamon stick, cloves, and lemon juice; bring to boil, then cool completely.", "Preheat oven to 150°C/300°F on lower middle rack.", "Pulse walnuts, almonds, pistachios, and cinnamon until finely chopped (not powdery).", "Cut phyllo stack in half to create smaller sheets; cover with plastic wrap and damp towel.", "Layer two phyllo rectangles, brushing each with ghee.", "Sprinkle 2+ teaspoons nut mixture over phyllo; roll tightly around a dowel or stick.", "Scrunch both ends toward center; slide onto greased baking pan.", "Cut scrunched rolls into quarters; trim shaggy ends.", "Brush remaining ghee over rolls and bake 70-90 minutes until deep golden brown.", "Immediately pour cooled syrup over hot rolls; let soak 30 minutes.", "Garnish with ground pistachio and serve; store covered with foil for up to one week."],
    tips: ["Custom dowel: 50cm long, 5mm thick (or use cake dowel/taped chopsticks).", "Al Sonbola phyllo recommended; avoid inferior brands that crack.", "To clarify butter: melt slowly, separate milk solids, skim foam, pour clear butterfat into bowl (yields ~200g from 250g butter).", "Weight measurements recommended for best results."]
  },
  {
    id: "s-mores-kunafa-pie",
    name: "S'mores Kunafa Pie",
    description: "A Middle Eastern twist on the classic campfire treat, featuring a crunchy caramelized kunafa crust, creamy milk chocolate filling, and toasted marshmallow topping.",
    category: "Middle Eastern",
    prepTime: "30 minutes",
    cookTime: "25 minutes",
    totalTime: "2 hours 30 minutes",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["1/4 cup (50g) granulated sugar", "2 tablespoons water", "A few drops of lemon juice"],
      "Kunafa Crust": ["1/2 cup (114g) unsalted butter, clarified", "150g kunafa/kataifi pastry", "3 tablespoons (37g) granulated sugar", "1/8 teaspoon ground cinnamon"],
      "Chocolate Filling": ["4 (90g each) Cadbury Dairy Milk chocolate bars", "2/3 cup heavy whipping cream", "Pinch of salt", "2 tablespoons unsalted butter, softened"],
      "Topping": ["15-25 large marshmallows, halved", "1 (11g) Cadbury Dairy Milk, melted (optional)"]
    },
    instructions: ["Combine sugar, water, and lemon juice in a small saucepan over high heat. Avoid stirring to prevent crystallization.", "Once boiling, reduce heat to low and simmer 5 minutes until syrup thickens slightly. Cool completely before using.", "Preheat oven to 200°C/390°F with rack in middle position.", "Grease a 9-inch pie dish with butter, line bottom with parchment paper, and grease the parchment.", "Clarify butter: melt slowly over medium-low heat until milk solids separate; let settle 10 minutes, skim foam, pour clear butterfat into bowl (measure 75g/1/3 cup for use).", "Shred kunafa dough into small pieces in a medium bowl (freeze for 1 hour if using fresh dough for easier cutting).", "Pour clarified butter, sugar, and cinnamon over kunafa; mix with hands until evenly coated.", "Transfer mixture to pie dish, spread evenly on bottom and sides. Press firmly using flat bottom of measuring cup to create compact layer.", "Bake 20-25 minutes until deep golden brown (cover sides with foil if browning too fast). Brush cooled crust immediately with sugar syrup. Cool completely.", "Cut chocolate into chunks in microwave-safe bowl. Add heavy whipping cream and salt.", "Microwave until cream boils (approximately 1.5 minutes). Whisk until chocolate melts completely and mixture becomes smooth.", "Add softened butter and whisk until combined.", "Pour chocolate mixture over cooled crust in even layer. Cover lightly with foil (not touching chocolate) and refrigerate 1-2 hours until set.", "Remove from fridge 1 hour before serving to reach room temperature.", "Turn on oven broiler to high. Arrange halved marshmallows over chocolate layer, sticky side down.", "Broil about 5 minutes until marshmallows toast to dark golden brown (watch closely as they burn quickly). Optionally drizzle melted chocolate over marshmallows.", "Serve immediately or within several hours. Store leftovers in airtight container for up to 1 day."],
    tips: ["Clarified butter is essential; straight butter contains milk solids that prevent kunafa from crisping fully.", "Adding sugar to kunafa is unorthodox but necessary; it acts like a glue fusing strands together and creates caramelized flavor.", "A tiny bit of cinnamon in the crust gives it an unmistakable cracker feel without actually tasting like cinnamon.", "Freeze kunafa for about an hour before cutting for easiest shredding.", "Keep a close eye when broiling marshmallows as they can turn from blonde to charcoal in seconds.", "Weight measurements are highly encouraged for best results."]
  },
  {
    id: "chocolate-kunafa-cookies",
    name: "Chocolate Kunafa Cookies",
    description: "No-bake cookies made from crunchy, buttery kunafa crumbs and glorious melted chocolate, offering a unique twist on traditional kunafa in cookie form.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    totalTime: "1 hour 30 minutes",
    servings: 16,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Base": ["250g konafa or kataifi/kadaifi pastry (fresh or frozen)", "1/2 cup plus 1 tablespoon (125g) unsalted butter", "4 bars (90g each) Cadbury Dairy Milk chocolate, plain"],
      "Garnish (Optional)": ["2 bars (24g each) Cadbury Dairy Milk chocolate, plain, melted", "Pistachios, finely chopped"],
      "Candied Nuts (Optional)": ["1/4 cup (50g) granulated sugar", "1 tablespoon water", "1/4 cup (30g) pistachios, sliced or chopped", "1/4 cup (30g) almonds, sliced or chopped"]
    },
    instructions: ["Prepare candied nuts if desired: combine sugar and water in saucepan, cook until amber, stir in nuts, spread on parchment to cool.", "Break semi-frozen konafa into small crumbs.", "Melt butter in large pan, add konafa, and sauté for 10 minutes until golden and crunchy.", "Cool konafa completely.", "Temper chocolate by melting 3/4 of it, then stirring in grated remaining 1/4.", "Mix melted chocolate with cooled konafa and candied nuts.", "Scoop 16 equal portions onto parchment paper.", "Flatten with cup bottom.", "Drizzle melted chocolate over top and sprinkle pistachios.", "Refrigerate 30-45 minutes until set."],
    tips: ["Room temperature storage keeps cookies for 4 days.", "Refrigerated storage keeps cookies for about one week in an airtight container."]
  },
  {
    id: "the-perfect-ghorayeba",
    name: "The Perfect Ghorayeba",
    description: "Perfected recipe for Egyptian, bakery-style Ghorayeba cookies that are delicate, fine-textured, smooth and melt in the mouth. A Middle Eastern shortbread-like cookie with a distinctive melting texture and rich ghee flavor.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "17 minutes",
    totalTime: "1 hour 47 minutes",
    servings: 85,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop",
    ingredients: {
      "Dough": ["4 cups (500g) all purpose flour", "1⅓ to 1½ cups (150-175g) powdered sugar, sifted", "1⅓ cup plus 1 tablespoon (300g) ghee, room temperature or cold"],
      "Garnish (Optional)": ["Pistachios (whole, halves or slices), or any nut of choice"]
    },
    instructions: ["Preheat oven to 120°C/248°F with rack in middle position. Line baking sheets with parchment paper.", "Whisk together flour and powdered sugar in stand mixer bowl with paddle attachment.", "Add ghee and mix on low speed 5 minutes until crumbly mixture forms and softens.", "Increase to medium-high speed for 5 minutes, then return to low for 5 more minutes (15 minutes total) until very smooth, lump-free, thick cake batter consistency resembling hummus.", "Pipe 3.5-4cm rounds using piping bag with large round tip, spacing 2cm apart. Refrigerate 5-10 minutes until no longer sticky.", "Flatten peaks with floured finger and press pistachio into center of each round.", "Bake 17 minutes until set, off-white color, with soft texture leaving dough residue on touch.", "Cool completely on baking sheets; cookies continue baking as they cool.", "Leave cookies out 2+ hours or overnight before storing to allow surface film to set.", "Store in regular non-airtight container for 2-3 weeks at room temperature."],
    tips: ["Use a kitchen scale for accurate measurements; measuring cups often over-pack flour and sugar.", "Ghee cannot be substituted with butter due to moisture content creating gluten.", "Total mixing time of 15 minutes is critical; dough should reach smooth hummus-like consistency.", "Do not over-bake; cookies should appear set but not hard.", "Texture improves after second day of baking.", "Piping method recommended over rolling due to dough stickiness.", "Halving or quartering the recipe works well; doubling is not recommended for standard home mixers."]
  },
  {
    id: "nutella-dream-cake",
    name: "Nutella Dream Cake",
    description: "An ultra-decadent layer cake featuring more than 3½ cups of Nutella distributed across a crunchy feuilletine base, creamy frosting, and a sauce-filled center. This impossibly moist chocolate cake is designed for Nutella enthusiasts.",
    category: "Cakes",
    prepTime: "1 hour",
    cookTime: "25 minutes",
    totalTime: "2 hours 25 minutes",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12571?w=600&h=400&fit=crop",
    ingredients: {
      "Nutella Crunch Layer": ["½ cup semisweet chocolate chips", "1 tablespoon butter", "½ cup plus 1 tablespoon Nutella", "2½ cups Feuilletine"],
      "Cake": ["1 box chocolate cake mix", "1 cup all-purpose flour", "1 cup granulated sugar", "¼ cup plus 2 tablespoons cocoa powder", "¾ teaspoon salt", "3 large eggs", "1½ teaspoons vanilla extract", "½ cup vegetable oil", "1⅓ cups water", "1 cup sour cream"],
      "Very Nutella Frosting": ["1 cup unsalted butter", "½ cup cream cheese", "1½ cups Nutella", "½ cup plus 1 tablespoon semisweet chocolate chips", "½ cup plus 1 tablespoon milk chocolate chips"],
      "Nutella Sauce Filling": ["1⅓ cups plus 1 tablespoon Nutella", "¼ cup plus 3 tablespoons whole milk"],
      "Spun Sugar Garnish (Optional)": ["1 cup granulated sugar", "2 tablespoons light corn syrup", "2 tablespoons water"]
    },
    instructions: ["Line an 8 or 9-inch cake pan with parchment and cooking spray for the crunch layer.", "Melt chocolate chips and butter together, then stir in Nutella until combined.", "Add Feuilletine to the Nutella mixture and coat evenly.", "Transfer to prepared pan, smooth, and press into an even layer; freeze 30+ minutes.", "Preheat oven to 350°F and prepare three 8 or 9-inch cake pans with parchment and spray.", "Whisk together cake mix, flour, sugar, cocoa powder, and salt.", "Add eggs, vanilla, oil, water, and sour cream; beat on low until combined, then 1 minute longer.", "Divide batter equally among three pans and bake 20-25 minutes until toothpick test passes.", "Cool in pans 15-20 minutes, then invert onto wire racks to cool completely.", "Melt both chocolate chip types over double boiler or microwave.", "Beat softened butter until creamy, add cream cheese, beat until smooth.", "Add Nutella to butter mixture and incorporate fully.", "Mix in melted chocolate until well combined; set aside in cool place.", "Whisk Nutella and milk together until smooth for filling sauce.", "Remove crunch layer from freezer and invert onto cake board.", "Frost crunch layer with ⅓ cup frosting and set aside.", "Using serrated knife, slice each cake layer horizontally to create 6 thin layers.", "Layer cake pieces with frosting and sauce: place bottom half of first layer on crunch base, add ½ cup sauce, top with second half, frost with ⅔ cup frosting.", "Repeat layering process with second set of cake slices.", "Use final two thin layers to complete stack, ending with sauce and final cake layer.", "Insert bamboo skewer through center if cake feels unstable.", "Apply crumb coat with thin frosting layer; freeze until firm.", "Apply final frosting layer, creating desired texture; top with garnishes as desired.", "Serve immediately or refrigerate overnight under cake dome; bring to room temperature before serving.", "For spun sugar: boil sugar, corn syrup, and water until dissolved; cover 2 minutes then cook uncovered until deep amber; cool 5 minutes.", "Dip fork tines in caramel and swing back-and-forth over spoon handle in long arcs to create strands.", "Gather strands into halo shape; place atop cake before serving."],
    tips: ["Recipe developed with kitchen scale; weight measurements recommended for best results.", "Entire cake may be prepared one day ahead and refrigerated overnight.", "Allow up to 5 hours for refrigerated cake to reach room temperature before serving.", "Feuilletine may be difficult to source; crispy rice cereal works as substitute (texture differs).", "Crunch layer is optional but recommended for texture contrast.", "If lacking multiple cake pans, prepare crunch layer day before; bake cake layers sequentially.", "Spun sugar best avoided on humid days.", "Cake mix base recommended to showcase Nutella flavor; from-scratch versions mask the taste."]
  },
  {
    id: "tres-leches-cake-with-toasted-marshmallow-frosting",
    name: "Tres Leches Cake with Toasted Marshmallow Frosting",
    description: "A light and airy sponge cake soaked in a delicious combination of three milks delivering a creamy, pudding-like texture, topped with a billowy toasted marshmallow frosting.",
    category: "Cakes",
    prepTime: "40 minutes",
    cookTime: "45 minutes",
    totalTime: "9 hours 25 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["6 large eggs, room temperature", "1 cup (200g) granulated sugar", "2 tablespoons pure vanilla extract", "1/8 teaspoon salt", "1/4 cup (28g) cornstarch", "1 1/2 cups (170g) all-purpose flour"],
      "Milk Mixture": ["2 1/2 cups (605g) evaporated milk", "1 cup plus 3 tablespoons (400g) sweetened condensed milk", "1 cup heavy cream"],
      "Marshmallow Frosting": ["4 egg whites (120g)", "1 cup (200g) granulated sugar", "1/4 teaspoon cream of tartar", "Pinch of salt"]
    },
    instructions: ["Preheat oven to 350°F/180°C with rack in lower third. Prepare a 13x9-inch pan with non-stick spray and parchment paper.", "Sift cornstarch and flour together; set aside.", "Combine eggs, sugar, vanilla, and salt in mixer bowl over simmering water bath, stirring until warm. Transfer to stand mixer and beat on high for 5 minutes until quadrupled in volume and pale.", "Sift half the flour mixture onto beaten eggs; fold gently. Repeat with remaining flour until incorporated.", "Pour batter into prepared pan; bake 25-35 minutes until golden and toothpick comes out clean.", "Immediately unmold while hot onto wire rack. Cool completely, then remove golden crust to expose holes.", "Whisk evaporated milk, condensed milk, and heavy cream together. Slowly pour over cake until absorbed. Cover and refrigerate 8 hours or overnight.", "For frosting: Combine egg whites, sugar, cream of tartar, and salt in mixer bowl over simmering water bath, stirring until warm and sugar dissolves. Transfer to mixer and beat on high until thick, white, and glossy.", "Spread frosting over chilled cake, creating swirls. Toast with kitchen torch until golden brown (alternatively, use oven broiler).", "Cut into squares and serve at room temperature or chilled. Best consumed same day."],
    tips: ["Make cake 1 day ahead; frost just before serving.", "For less saturation, reduce evaporated milk by half.", "Recipe halves beautifully for 8x8-inch pan.", "Heating egg whites ensures safety and stability."]
  },
  {
    id: "the-most-amazing-russian-honey-cake",
    name: "The Most Amazing Russian Honey Cake",
    description: "Ten layers of soft, caramelized honey cakes that taste like the fine marriage of Lotus biscuits, honey graham crackers and gingerbread cookies, sandwiched between a cloud-like burnt honey and dulce de leche whipped cream.",
    category: "Cakes",
    prepTime: "1 hour 30 minutes",
    cookTime: "1 hour 30 minutes",
    totalTime: "12 hours",
    servings: 16,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop",
    ingredients: {
      "Burnt Honey": ["3/4 cup (9 oz/255g) honey", "1/4 cup (2 oz/57g) water"],
      "Cake Layers": ["1/4 cup Burnt Honey", "3/4 cup (9 oz/255g) honey", "1 cup plus 2 tablespoons (8 oz/227g) granulated sugar", "14 tablespoons (7 oz/199g) unsalted butter, cut into 1/2-inch pieces", "6 large eggs (300g without shells)", "2 1/2 teaspoons baking soda", "3/4 teaspoon fine salt", "1 teaspoon ground cinnamon", "3 3/4 cups (16 oz/454g) all-purpose flour"],
      "Frosting": ["1/2 cup Burnt Honey", "1 1/4 cups (13.4 oz/380g can) dulce de leche", "1/2 teaspoon fine salt", "4 3/4 cups (1.12 liters) heavy whipping cream, very cold, divided"]
    },
    instructions: ["Preheat oven to 180°C/375°F with rack in middle position.", "Line baking sheets with silicon mats or parchment paper; trace 9-inch circles on paper.", "Place 3/4 cup honey in saucepan over high heat. Simmer, then reduce to medium. Cook until color darkens from pale yellow to dark amber (about 3 minutes). Remove from heat and carefully whisk in 1/4 cup water. Transfer to measuring cup.", "Fill medium saucepan with 2 inches water and bring to simmer. Combine 1/4 cup burnt honey, 3/4 cup honey, sugar, and butter in heat-proof bowl over water bath (not touching water).", "Crack eggs into small bowl. Mix baking soda, salt, and cinnamon in separate small bowl.", "Stir honey-butter mixture until butter melts, then whisk well. When warm, whisk in eggs. When mixture returns to same temperature, add cinnamon mixture and whisk 30 seconds. Remove from heat and cool until warm.", "Sift flour over batter in three batches, whisking thoroughly after each addition until smooth. Keep batter warm over water bath.", "Spoon heaping 1/3 cup batter onto traced circle and spread evenly with offset spatula to circle edges.", "Bake layers 6-7 minutes until deep caramel color, springs back when touched, and toothpick comes out clean. Remove from oven immediately.", "When cool enough to handle, trim any edges that spread beyond circles. Allow to cool completely on wire racks.", "Reduce oven to 120°C/250°F. Toast least attractive layer and trimmings until deep reddish brown and dry (about 15 minutes). Cool, then grind into fine crumbs in food processor.", "Combine 1/2 cup burnt honey, dulce de leche, and 1/2 teaspoon salt in medium bowl. Whisk until combined, then slowly pour in 3/4 cup cream. Mix until homogeneous and chill 30 minutes.", "Pour 4 cups heavy cream into chilled stand mixer bowl with whisk attachment. Whip at medium speed to soft peaks (about 6 minutes). Slowly add chilled honey mixture and whip to medium stiff peaks.", "Assemble cake on 10-inch cardboard circle or serving plate. Place first cake layer, then spoon heaping cup frosting on center. Spread evenly with offset spatula, leaving 1/4-inch ring around edge. Alternate layers and frosting, ending with frosting. Use remaining frosting on sides.", "Press reserved toasted cake crumbs onto sides (and top, if desired) of frosted cake.", "Chill in refrigerator overnight to allow frosting to meld with cake layers and soften them. Slice into thin wedges and serve cold or at cool room temperature."],
    tips: ["This is a multi-step, highly involved cake requiring advance planning.", "Original recipe calls for wildflower honey, but regular mainstream honey works well.", "Dulce de leche can be made from sweetened condensed milk if unavailable (takes 4 hours to cook, so prepare up to a month ahead).", "Cake layers can be baked and frozen for several weeks; thaw completely before using.", "Finished frosted cake can be made 2 days in advance.", "The batter will emit a curious odor when baking soda is added -- this is normal.", "Keep batter warm for easier spreading.", "Do not overbake layers.", "All recipe measurements developed using weight; kitchen scale recommended for best results.", "Cake needs overnight refrigeration before serving to achieve proper texture."]
  },
  {
    id: "no-bake-lotus-biscoff-cheesecake",
    name: "No-Bake Lotus Biscoff Cheesecake",
    description: "A creamy cheesecake with an airy, mousse-like texture featuring Lotus Biscoff in every element -- crushed cookies in the crust, spread in the filling, and melted topping with crumb garnish.",
    category: "Cheesecakes",
    prepTime: "30 minutes",
    cookTime: "8 minutes",
    totalTime: "6 hours 38 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
    ingredients: {
      "Crust": ["30 Lotus Biscoff cookies (235g)", "6 tablespoons unsalted butter, melted (85g)"],
      "Filling": ["1 cup heavy whipping cream, very cold (237ml)", "12.3 oz cream cheese, cool room temperature (350g)", "1 cup Lotus Biscoff spread (260g)", "2/3 cups powdered sugar (75g)", "1/8 teaspoon salt"],
      "Topping": ["Remaining Lotus Biscoff spread from jar (140g)"]
    },
    instructions: ["Preheat oven to 325°F/160°C and line 9-10 inch springform pan bottom with parchment.", "Pulse Lotus cookies into fine crumbs using food processor or crush in bag with rolling pin.", "Mix melted butter into crumbs; reserve 1/4 cup (50g) for garnish; press remainder into pan bottom.", "Bake crust 8-9 minutes until fragrant and deepened in color; cool completely (optional step).", "Beat cold heavy whipping cream on medium speed until stiff peaks form; transfer to separate bowl.", "In same mixer bowl, beat cream cheese, Lotus spread, powdered sugar, and salt until smooth.", "Gently fold whipped cream into cream cheese mixture until uniform with no white streaks.", "Spread filling evenly over cooled crust and smooth surface.", "Cover with plastic wrap and refrigerate 5-6 hours or overnight until set.", "Loosen cheesecake from pan rim with sharp knife, remove rim, then transfer to serving platter.", "Microwave remaining Lotus spread about 40 seconds until very fluid and melted.", "Use piping bag or small plastic bag with end cut off to drizzle melted spread around edges; pour remaining spread over surface and smooth quickly.", "Refrigerate 10+ minutes to set topping; sprinkle reserved crumbs around rim; place 2 whole cookies on top.", "Serve cold from refrigerator. For neat slices, dip knife in hot water, wipe dry between cuts."],
    tips: ["Whip cream properly: ensure it is very cold and stop beating at soft peaks; finish by hand to prevent curdling.", "Fold gently to preserve air bubbles that create the airy texture.", "Use full-fat cream cheese only; lower-fat versions won't deliver desired results.", "Freeze briefly (30 minutes) before topping to prevent the warm spread from softening the cake.", "For Philadelphia brand, use brick-style, not tub variety.", "Crust baking is optional but recommended for better texture and flavor.", "Leftovers keep refrigerated up to 5 days; freezes well for up to one month.", "The recipe uses one full 400g jar of Lotus spread total."]
  },
  {
    id: "best-ever-pastry-shop-style-basbousa",
    name: "Best Ever Pastry Shop-Style Basbousa",
    description: "An authentic Egyptian-style semolina pastry that is super soft, dense, never cake-y, and melt-in-the-mouth delicious, rivaling commercial pastry shop versions.",
    category: "Middle Eastern",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    totalTime: "1 hour 35 minutes",
    servings: 16,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Light Soaking Syrup": ["250g granulated sugar", "350g water", "Small squeeze of lemon juice"],
      "Basbousa Base": ["500g medium grind white semolina", "150g melted ghee", "50g unsweetened shredded coconut (optional)", "150g whole milk", "100g heavy sugar syrup", "250g granulated sugar", "2 tablespoons ghee (for brushing)", "150g raw nuts like hazelnuts (optional)", "Fresh eshta for serving (optional)"],
      "Heavy Sugar Syrup": ["70g granulated sugar", "40g water", "1 drop lemon juice"]
    },
    instructions: ["Prepare light soaking syrup by combining sugar, water, and lemon juice; heat until dissolved, bring to boil, then cool completely.", "Preheat oven to 210°C/410°F and grease a 34cm round pan with ghee.", "Mix semolina with melted ghee using a spatula until every grain is well coated.", "Process coconut finely and stir into semolina mixture if using.", "Combine milk, heavy sugar syrup, and sugar in microwave-safe cup; heat until warm and whisk until sugar dissolves completely.", "Pour warm mixture over semolina and fold gently until no dry pockets remain; avoid overmixing.", "Pour batter into prepared pan and tap to smooth the surface.", "Refrigerate for 15-20 minutes until batter thickens and is no longer jiggly.", "Sprinkle nuts over surface if desired, pressing to adhere, then refrigerate again.", "Bake for 22-27 minutes until surface is deep golden brown.", "Immediately pour cooled light soaking syrup over hot basbousa and allow to soak.", "Cool in pan for at least 30 minutes before cutting into squares.", "Serve warm or at room temperature with eshta if desired."],
    tips: ["Weight measurements using a kitchen scale are highly recommended for accuracy, especially for semolina.", "Use medium-grain semolina specifically; avoid fine or basbousa mixes.", "Ghee cannot be substituted with butter; clarified butter may work as alternative.", "Coconut taste is subtle; it adds flavor dimension without being detectable.", "Pour room-temperature (not hot) syrup to prevent basbousa from seizing and hardening.", "Store in airtight container for up to 1 week at room temperature.", "Half recipe can be made in a 24cm pan with same baking time."]
  },
  {
    id: "pistachio-kunafa-chocolate-cookies",
    name: "Pistachio Kunafa Chocolate Cookies",
    description: "The viral Dubai Chocolate in cookie form, these Pistachio Kunafa Cookies are unbelievably rich and decadent with a crunchy kunafa pistachio filling wrapped in brownie-like chocolate cookie dough.",
    category: "Cookies",
    prepTime: "25 minutes",
    cookTime: "10 minutes",
    totalTime: "45 minutes",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=400&fit=crop",
    ingredients: {
      "Pistachio Kunafa Filling": ["1 cup (90g) kunafa pastry", "1 Tbsp butter or ghee, for roasting kunafa dough", "3/4 cup (200g) pistachio spread", "2 Tbsp tahini (optional)"],
      "Cookie Dough": ["114g unsalted butter", "1 tsp espresso/instant coffee powder", "1 cup brown sugar, packed", "2 tsp vanilla extract", "1 egg, room temperature", "1/3 cup cocoa powder", "1 cup all purpose flour", "1/2 tsp baking soda", "1/2 tsp salt", "1/2 cup milk or semi-sweet chocolate chunks"]
    },
    instructions: ["Shred kunafa pastry and roast with butter until golden brown; cool and mix with pistachio spread and tahini.", "Refrigerate filling 10 minutes, then form into 10-12 equal balls and freeze 15 minutes.", "Brown butter over medium heat until light golden; cool 10 minutes.", "Whisk browned butter with espresso powder, brown sugar, vanilla, and egg.", "Sift and fold in cocoa powder, flour, baking soda, and salt.", "Cover frozen filling balls with cookie dough; top with chocolate chunks.", "Bake at 180°C (350°F) for 10 minutes on lower-middle rack.", "Cool completely 20-25 minutes before serving."],
    tips: ["Keeps at room temperature for 3 days or refrigerated for one week.", "Both baked and unbaked cookies freeze well in airtight containers."]
  },
  {
    id: "pistachio-kunafa-brownies",
    name: "Pistachio Kunafa Brownies",
    description: "A soft, decadent brownie layered with sweet and crunchy pistachio kunafa spread and a smooth, creamy chocolate ganache on top.",
    category: "Brownies",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    totalTime: "50 minutes",
    servings: 9,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&h=400&fit=crop",
    ingredients: {
      "Brownie": ["1/2 cup (120g) softened unsalted butter", "1 cup (180g) light brown sugar", "2 large eggs", "1 tsp vanilla extract", "1/3 cup (40g) cocoa powder", "1/2 tsp (2g) baking powder", "1/2 cup (60g) all-purpose flour", "1/8 tsp (pinch) salt"],
      "Pistachio Kunafa and Chocolate Layer": ["3/4 cup (200g) pistachio spread", "1 cup (90g) kunafa pastry", "1 Tbsp butter or ghee (for roasting)", "1 cup (180g) semi-sweet or dark chocolate"]
    },
    instructions: ["Preheat to 180°C/350°F; prepare 7-inch square pan.", "Cream butter and sugar until pale; add eggs and vanilla.", "Sift and fold in dry ingredients.", "Pour batter; bake 20-25 minutes until toothpick test passes.", "Shred kunafa; roast in melted butter until golden-brown.", "Mix roasted kunafa with slightly melted pistachio spread.", "Melt chocolate in microwave (15-30 second intervals).", "Layer kunafa mixture on cooled brownie, then chocolate layer.", "Garnish with slivered pistachios; refrigerate 5-10 minutes before serving."],
    tips: ["Store in refrigerator for up to 10 days in an airtight container.", "Freeze individual pieces for several months."]
  },
  {
    id: "the-easiest-almond-croissants",
    name: "The Easiest Almond Croissants",
    description: "Flaky almond croissants filled and topped with a creamy frangipane, almond slices, and a generous dusting of icing sugar.",
    category: "Pastries",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    totalTime: "30 minutes",
    servings: 6,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Base Components": ["6-8 medium/large croissants (preferably stale, a day-old)", "1 cup sliced almonds", "Powdered icing sugar (for dusting)"],
      "Syrup": ["2 Tbsp granulated sugar", "1 cup water", "1 tsp almond extract"],
      "Almond Cream/Frangipane": ["1/2 cup granulated or caster sugar", "1 cup almond meal/almond flour", "1/4 tsp salt", "1/2 cup (100g) unsalted butter, room temperature", "2 large eggs, room temperature", "1 tsp vanilla extract", "1/4 tsp almond extract"]
    },
    instructions: ["Prepare simple syrup by heating sugar and water to a boil; remove from heat, add almond extract, and cool.", "Create almond cream using a mixer: combine sugar, almond flour, and salt; beat in butter until creamy; add eggs individually; mix in vanilla and almond extracts.", "Slice croissants horizontally without cutting completely through; brush cut sides lightly with syrup; spread 2 Tbsp almond cream on bottom half; replace top and add 1 Tbsp cream on top; generously apply sliced almonds.", "Bake on lined tray at 180°C (350°F) for 15 minutes until cream turns golden brown; cool 5-10 minutes; dust with icing sugar."],
    tips: ["Stale croissants (1-5 days old) work perfectly for this recipe.", "These freeze well for up to 2 months when completely prepped.", "Almond cream can be stored separately in the fridge for up to one month."]
  },
  {
    id: "death-by-chocolate-cookies",
    name: "Death by Chocolate Cookies",
    description: "Soft, gooey, decadent double chocolate cookies with a brownie-like texture, loaded with chocolate chunks and chips.",
    category: "Cookies",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    totalTime: "25 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1625876981260-1f9372725bae?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["114g unsalted butter", "1 tsp espresso powder/instant coffee", "1 cup packed brown sugar", "2 tsp vanilla extract", "1 egg (room temperature)", "1/3 cup cocoa powder", "1 cup all-purpose flour", "1/2 tsp baking soda", "1/2 tsp salt", "1 cup chocolate chips and chunks (mixed)"]
    },
    instructions: ["Brown butter in heavy saucepan over medium heat, stirring constantly until golden. Transfer to mixing bowl.", "Cool browned butter approximately 10 minutes, then add espresso powder, brown sugar, vanilla extract, and egg. Whisk thoroughly.", "Sift dry ingredients (cocoa powder, flour, baking soda, salt) into wet mixture. Fold until combined, then mix in chocolate.", "Divide dough into 12 portions using cookie scoop. Space 2 inches apart on lined baking sheet.", "Bake at 180°C (350°F) on lower-middle rack for 10-11 minutes until edges firm while centers remain gooey. Cool in pan 10 minutes."],
    tips: ["For even better results, freeze your cookie dough balls for a few days to allow flavors to develop and achieve thicker cookies."]
  },
  {
    id: "baked-mini-cheesecakes",
    name: "Baked Mini Cheesecakes",
    description: "New York style mini cheesecakes inspired by The Cheesecake Factory's classic cheesecakes, with lemon flavor and crisp biscuit base -- no water bath required.",
    category: "Cheesecakes",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    totalTime: "8 hours 35 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop",
    ingredients: {
      "Biscuit Base": ["300g biscuits", "120g melted butter (1/2 cup)"],
      "Cheesecake Filling": ["300g cream cheese, room temperature", "1/2 cup (100g) granulated sugar", "2 large eggs", "1 tsp vanilla extract", "Zest of one lemon", "1 1/2 tbsp all-purpose flour", "200g sour cream, room temperature"]
    },
    instructions: ["Pulse biscuits into fine crumbs; mix with melted butter.", "Press mixture into greased pan; pre-bake at 160°C for 5-10 minutes.", "Beat cream cheese until creamy; gradually add sugar, then eggs.", "Fold in vanilla, lemon zest, flour, and sour cream.", "Pour filling into pre-baked crust (3/4 full).", "Bake 15 minutes until slightly jiggly at center.", "Cool at room temperature 1+ hour; refrigerate overnight.", "Top as desired and serve chilled."],
    tips: ["Use room-temperature ingredients for lump-free batter.", "Avoid over-beating to minimize cracks.", "Cracks will smooth as cheesecake cools.", "Chill minimum 8 hours for enhanced flavor.", "Works in muffin trays or silicone molds if specialized pan unavailable."]
  },
  {
    id: "nutella-brownies",
    name: "Nutella Brownies",
    description: "The most decadent, fudgy brownies stuffed with a thick slab of Nutella, featuring two layers of soft, gooey brownie with a frozen Nutella layer sandwiched between them.",
    category: "Brownies",
    prepTime: "25 minutes",
    cookTime: "35 minutes",
    totalTime: "1 hour",
    servings: 9,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
    ingredients: {
      "Brownies": ["300g Nutella spread (~1 1/4 cup)", "200g unsalted butter", "200g semi-sweet chocolate chips", "1 cup dark brown sugar", "3 eggs (room temperature)", "1 tsp vanilla extract", "1/2 cup flour", "1/4 cup cocoa powder", "Pinch of salt"]
    },
    instructions: ["Create a frozen Nutella slab on parchment paper matching your pan's dimensions; freeze until solid.", "Prepare brownie batter by melting butter and chocolate chips, cool briefly, then whisk in sugar, eggs, and vanilla; sift in flour, cocoa, and salt.", "Layer half the batter in greased pan, add frozen Nutella slab, top with remaining batter; bake 35 minutes at 180°C/350°F.", "Cool in pan for 30 minutes, remove, cool another 40 minutes before slicing."],
    tips: ["These taste better the next day once flavors meld, though warm brownies are equally enjoyable."]
  },
  {
    id: "pumpkin-cinnamon-rolls",
    name: "Pumpkin Cinnamon Rolls",
    description: "All the fall flavors in one indulgent dessert -- soft pumpkin cinnamon rolls topped with a brown butter maple icing.",
    category: "Pastries",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    totalTime: "2 hours 30 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    ingredients: {
      "Pumpkin Roll Dough": ["3.5 cups all-purpose flour", "1/4 cup light brown sugar", "2 1/4 tsp active dry yeast", "1 tsp pumpkin spice mix", "1/2 tsp cinnamon powder", "1 tsp salt", "3/4 cup lukewarm whole milk", "100g pumpkin puree", "2 eggs (room temperature)", "100g unsalted butter (softened)"],
      "Cinnamon Sugar Filling": ["115g unsalted butter (softened)", "1 1/4 cup light brown sugar", "2 tbsp cinnamon powder", "1 tsp pumpkin spice mix", "1/4 tsp salt"],
      "Brown Butter Maple Icing": ["5 tbsp salted butter", "160g cream cheese (room temperature)", "1/3 cup maple syrup", "1-2 cups powdered icing sugar", "1 tsp vanilla extract"]
    },
    instructions: ["Combine flour, brown sugar, yeast, pumpkin spice, cinnamon, and salt in stand mixer bowl; gently mix with spatula.", "Add lukewarm milk and pumpkin puree; mix on low speed with hook attachment.", "Add eggs and mix; gradually incorporate softened butter until smooth dough forms.", "Knead on medium-high for 3-5 minutes.", "Transfer to greased bowl; cover and let rise 1-2 hours until doubled.", "Mix filling ingredients (butter, sugar, spices) in separate bowl.", "Punch down dough; roll into rectangle on floured surface.", "Spread filling evenly; roll tightly from longest side.", "Slice into 12-15 equal rolls using serrated knife.", "Place rolls in greased pan with 1-inch spacing; cover and let rise 30 minutes.", "Bake at 180°C (350°F) for 25-30 minutes until golden brown.", "Brown butter in saucepan (3-5 minutes); cool completely.", "Whisk brown butter with cream cheese and maple syrup.", "Sift in icing sugar; mix in vanilla extract.", "Spread icing over cooled rolls."],
    tips: ["Store covered at room temperature for 1-2 days or refrigerated for a week.", "Can be frozen for several months; defrost before microwaving or air-frying for 3-5 minutes.", "Overnight preparation possible: refrigerate after rolling, bake the next morning after additional rise time.", "Use high-quality all-purpose flour for best results.", "Ensure pumpkin puree is strained to avoid excess moisture."]
  },
  {
    id: "oatmeal-chocolate-chip-pizookie",
    name: "Oatmeal Chocolate Chip Pizookie",
    description: "A one-pan pizza cookie that is easy to make and tastes phenomenally good -- a warm, cozy dessert best served with ice cream.",
    category: "Desserts",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    totalTime: "30 minutes",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&h=400&fit=crop",
    ingredients: {
      "Pizookie": ["1 1/4 cup quick white oats or rolled oats", "1 cup all-purpose flour", "1/2 tsp baking soda", "1/2 tsp salt", "1/2 cup unsalted butter, melted", "1/2 cup dark brown sugar", "1/4 cup granulated sugar", "1 egg", "2 tsp vanilla extract", "1 cup chocolate chips (choice of variety)"]
    },
    instructions: ["Mix dry ingredients (oats, flour, baking soda, salt) in a bowl and set aside.", "Whisk together melted butter, brown sugar, and white sugar until sugars dissolve; add egg and vanilla extract.", "Fold dry mixture into wet mixture; stir in chocolate chips.", "Press dough evenly into a greased 8-inch round pan or iron skillet.", "Bake at 350°F (180°C) for 20-25 minutes until golden brown; serve warm with ice cream."],
    tips: ["Can be sliced like pizza or eaten directly from the pan with spoons."]
  },
  {
    id: "fig-and-honey-cheesecake",
    name: "Fig and Honey Cheesecake",
    description: "A silky, rich cheesecake naturally sweetened with honey and lightly perfumed with orange blossom water, with fig preserves swirled through and a cardamom-spiced crust.",
    category: "Cheesecakes",
    prepTime: "30 minutes",
    cookTime: "60-70 minutes",
    totalTime: "6+ hours (including chilling)",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45adb?w=600&h=400&fit=crop",
    ingredients: {
      "Crust": ["2 cups graham cracker crumbs", "2 tablespoons granulated sugar", "1/2 teaspoon ground cardamom", "1/2 cup unsalted butter, melted"],
      "Cheesecake Filling": ["2 pounds (four 8-ounce packages) full-fat cream cheese, at room temperature", "3/4 cup full-fat sour cream, at room temperature", "1 1/4 cups honey", "4 large eggs, at room temperature", "1 tablespoon orange blossom water", "1/2 cup fig preserves"],
      "Topping": ["Fresh figs, halved or sliced", "Pistachios", "Honey"]
    },
    instructions: ["Preheat oven to 325°F; place water bath on lowest rack to prevent cracking.", "Mix crust ingredients; press into springform pan.", "Beat cream cheese and sour cream; slowly add honey, then eggs and orange blossom water.", "Pour three-fourths filling over crust; add fig preserves and swirl with toothpick.", "Pour remaining batter; bake 60-70 minutes until edges set but center jiggles.", "Cool gradually in turned-off oven with door ajar.", "Refrigerate several hours or overnight; garnish with fresh figs, pistachios, and honey."],
    tips: ["Use room-temperature ingredients for smooth, lump-free batter.", "Water bath on lowest rack helps prevent cracking.", "Cool gradually in the oven with door ajar to prevent sudden temperature changes."]
  },
  {
    id: "carrot-and-cardamom-bundt-cake",
    name: "Carrot and Cardamom Bundt Cake",
    description: "A fusion take on gajar ka halwa with all the warm, familiar flavors of sweet carrots and fragrant cardamom baked into a soft, tender bundt cake topped with cardamom cream cheese frosting.",
    category: "Cakes",
    prepTime: "20 minutes",
    cookTime: "55-60 minutes",
    totalTime: "1 hour 30 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["2 1/2 cups all-purpose flour", "2 teaspoons baking powder", "1 teaspoon baking soda", "1 1/2 teaspoons ground cardamom", "1/2 teaspoon salt", "4 large eggs (room temperature)", "1 1/2 cups light brown sugar", "1/2 cup granulated sugar", "1 cup neutral oil", "1/2 cup full-fat yogurt", "1 teaspoon vanilla extract", "1 pound carrots (peeled, trimmed, finely shredded)"],
      "Cardamom Cream Cheese Frosting": ["4 ounces cream cheese (room temperature)", "1/4 cup unsalted butter (room temperature)", "1 cup powdered sugar", "2 tablespoons heavy whipping cream (cold)", "1/4 teaspoon ground cardamom", "Sliced or ground nuts for garnish"]
    },
    instructions: ["Preheat oven to 350°F; prepare greased 9.5-inch bundt pan.", "Whisk flour, baking powder, baking soda, cardamom, and salt; set aside.", "Combine eggs, sugars, oil, yogurt, and vanilla; fold in carrots and flour mixture carefully.", "Bake 55-60 minutes until toothpick inserted near center comes out clean (tent with foil if browning too quickly).", "Cool in pan 15 minutes, then transfer to wire rack to cool completely.", "Beat cream cheese and butter until fluffy (~3 minutes); add heavy cream, then powdered sugar.", "Frost cooled cake and garnish with nuts."],
    tips: ["Cake can be made a day ahead.", "Perfect for Ramadan and Eid celebrations.", "Pairs well with chai.", "Tent with foil if browning too quickly during baking."]
  },
  {
    id: "baklava",
    name: "Baklava",
    description: "A Middle Eastern version of baklava with a simplified approach using clarified butter poured over layered phyllo and ground nuts, then soaked in orange blossom syrup.",
    category: "Middle Eastern",
    prepTime: "30 minutes",
    cookTime: "50-60 minutes",
    totalTime: "1 hour 30 minutes (plus soaking time)",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Clarified Butter": ["1 cup unsalted butter"],
      "Syrup": ["1 1/2 cups granulated sugar", "3/4 cup water", "1 tablespoon lemon juice", "1 tablespoon orange blossom water"],
      "Baklava Layers": ["1 pound phyllo dough (room temperature)", "3 cups walnuts or almonds (ground coarsely)"]
    },
    instructions: ["Melt butter over medium-low heat; stir occasionally until solids brown, then strain through paper towel into heat-proof jar.", "Combine sugar, water, and lemon juice; boil then simmer 10 minutes; add orange blossom water and refrigerate until completely cool.", "Preheat oven to 325°F.", "Brush 9\"x13\" pan with clarified butter.", "Layer: half phyllo dough, ground nuts spread evenly, remaining phyllo, brush top with butter.", "Cut into diamonds using six horizontal and nine diagonal cuts.", "Pour remaining butter over baklava; rest 5 minutes then bake 50-60 minutes at 325°F (rotate halfway).", "Immediately pour cooled syrup over hot baklava; soak several hours or overnight."],
    tips: ["Syrup must be completely cool before pouring over hot baklava.", "Can be kept loosely covered at room temperature for two weeks.", "Rotate pan halfway through baking for even browning."]
  },
  {
    id: "trilece",
    name: "Trilece",
    description: "A popular Turkish caramel milk cake featuring a light sponge soaked in a dual milk mixture and topped with silky caramel and whipped cream.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "20-25 minutes",
    totalTime: "4+ hours (including chilling)",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
    ingredients: {
      "Caramel Topping": ["1 cup granulated sugar", "1/4 cup water", "2 tablespoons unsalted butter", "1 cup heavy whipping cream"],
      "Cake": ["4 large eggs, room temperature", "1 cup granulated sugar", "1/2 cup neutral oil", "1/4 cup whole milk", "1 tablespoon vanilla extract", "1 cup all-purpose flour", "2 teaspoons baking powder", "1/4 teaspoon salt"],
      "Milk Soaking Mixture": ["2 cups whole milk", "1 cup heavy whipping cream", "1/4 cup granulated sugar"],
      "Whipped Cream Topping": ["1 cup cold heavy whipping cream", "2 tablespoons granulated sugar", "1 tablespoon full-fat powdered milk (optional)"]
    },
    instructions: ["Prepare caramel by boiling sugar and water until golden brown (5-10 minutes), then whisk in butter and cream.", "Preheat oven to 350°F; line 9\"x13\" pan with parchment.", "Whisk eggs and sugar until tripled in volume and foamy (5-8 minutes).", "Gently fold in oil, milk, and vanilla sequentially.", "Sift and fold flour, baking powder, and salt carefully.", "Bake until golden and toothpick-clean (20-25 minutes); cool completely.", "Prepare milk mixture by heating milk, cream, and sugar until lukewarm.", "Prick cooled cake with fork; pour milk mixture evenly over surface; refrigerate.", "Whip cold cream with sugar and optional powdered milk to stiff peaks.", "Spread three-quarters of whipped cream over cake.", "Pour cooled caramel over cream layer.", "Pipe reserved cream in parallel lines; drag toothpick perpendicular to create signature pattern.", "Refrigerate until serving."],
    tips: ["The optional powdered milk in the whipped cream topping helps stabilize the cream, preventing it from losing its shape or weeping.", "Best prepared ahead of time and refrigerated for several hours before serving."]
  },
  {
    id: "khaliat-al-nahl",
    name: "Khaliat al Nahl",
    description: "Yemeni Honeycomb Bread -- golden rolls baked in a honeycomb pattern, filled with cream cheese and finished with a sweet honey glaze and sesame-nigella seed topping.",
    category: "Middle Eastern",
    prepTime: "20 minutes",
    cookTime: "22-27 minutes",
    totalTime: "2 hours (including rising time)",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Main Dough": ["3/4 cup full-fat milk, lukewarm", "2 tablespoons neutral flavored oil", "2 tablespoons granulated sugar", "2 teaspoons active dry or instant yeast", "2 cups all-purpose flour", "1 teaspoon baking powder", "1/2 teaspoon salt", "4 ounces cream cheese, cold"],
      "Topping": ["1 large egg", "1 tablespoon whole or reduced-fat milk", "1/2 teaspoon sesame seeds", "1/4 teaspoon nigella seeds", "1/4 cup honey"]
    },
    instructions: ["Combine milk, oil, sugar, and yeast; let sit until foamy (5 minutes).", "Whisk flour, baking powder, and salt separately.", "Mix flour mixture into wet ingredients; knead until smooth (5 minutes).", "Let dough rise until doubled (1-1.5 hours).", "Preheat oven to 350°F; prepare 9-inch cake pan.", "Divide dough into 20-24 pieces; wrap each around cream cheese piece.", "Arrange in honeycomb pattern; let rise 30 minutes.", "Brush with egg wash; sprinkle seeds.", "Bake until golden (22-27 minutes); drizzle honey immediately."],
    tips: ["Ensure milk is lukewarm (not hot) to properly activate the yeast.", "Use cold cream cheese so it holds its shape when wrapped in dough."]
  },
  {
    id: "chai-spiced-pumpkin-snickerdoodles",
    name: "Chai Spiced Pumpkin Snickerdoodles",
    description: "A balanced autumn cookie featuring cozy chai spices -- cinnamon, cardamom, ginger, and cloves -- with pumpkin puree, rolled in chai-spiced sugar for a soft, chewy finish.",
    category: "Cookies",
    prepTime: "15 minutes",
    cookTime: "10-12 minutes",
    totalTime: "1 hour 30 minutes (including chilling)",
    servings: 18,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Chai Spice Mixture": ["2 tbsp granulated sugar", "1/2 tsp ground cinnamon", "1/8 tsp ground cloves", "1/8 tsp ground ginger", "1/8 tsp ground cardamom"],
      "Cookies": ["1 1/2 cups all-purpose flour", "1 tsp ground cinnamon", "3/4 tsp cream of tartar", "1/2 tsp salt", "1/4 tsp ground cloves", "1/4 tsp ground ginger", "1/4 tsp ground cardamom", "1/2 cup unsalted butter (room temperature)", "1/2 cup granulated sugar", "1/4 cup brown sugar (packed)", "1 large egg yolk", "1 tsp vanilla extract", "1/4 cup pumpkin puree"]
    },
    instructions: ["Mix chai spice ingredients together; set aside.", "Combine flour and spices in a bowl.", "Cream butter and sugars; add egg yolk, vanilla, and pumpkin puree; mix in flour mixture; refrigerate 1 hour.", "Preheat oven to 350°F.", "Shape dough into 2-inch balls; roll in chai spice mixture; space 2 inches apart on parchment-lined baking sheet.", "Bake 10-12 minutes until set; cool on baking sheets."],
    tips: ["Refrigerate dough for at least 1 hour for easier shaping.", "Do not overbake -- cookies will continue to set as they cool on the baking sheet."]
  },
  {
    id: "ricotta-kunafa-rolls",
    name: "Ricotta Kunafa Rolls",
    description: "Creamy ricotta cheese wrapped inside golden, crunchy strands of sticky sweet kunafa, sprinkled with vibrant pistachios for the finishing touch.",
    category: "Middle Eastern",
    prepTime: "1 hour",
    cookTime: "40 minutes",
    totalTime: "2 hours 40 minutes",
    servings: 30,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["2 cups (14 oz/400g) granulated sugar", "1 cup (237 ml) water", "A squeeze of fresh lemon juice, about 1 teaspoon", "1 tsp orange blossom water (optional, may be substituted with your favorite flavoring like cinnamon or vanilla)"],
      "Kunafa Rolls": ["1lb/500g FRESH kunafa sold in long organized strands (known as kunafa torah)", "14oz/400g ricotta cheese", "1 1/2 cups (12oz/340g) melted ghee (or 2 cups (1 lb/450g) unsalted butter, clarified, melted, and cooled slightly)", "Ground pistachios, for garnish (optional)"]
    },
    instructions: ["In a medium saucepan, combine sugar, water and lemon juice. Set on stovetop over high heat. Avoid stirring to prevent crystallization, but help if needed. Once it boils, stop stirring.", "Bring to a rolling boil, then reduce heat to low and simmer for 10 minutes. The syrup will thicken to a consistency similar to corn syrup.", "Remove from heat and stir in orange blossom water or flavoring of choice. Transfer to a measuring cup with spout and cool to room temperature.", "Unwrap kunafa and take out a thin layer. Rewrap rest with a damp towel to prevent drying. Using kitchen scissors, cut strands about 12cm long and 5cm wide.", "Working with one strand at a time, remove a 1cm wide strand from the side of the 5cm one. Place the 1cm strand horizontally over the upper side of the wider strand to form a lower case 't' shape.", "Place 2 teaspoons of ricotta cheese over the thin strand. Fold the sides of the thin strand over the cheese, ensuring it's sealed. Pat water on the wider kunafa strand, then roll ensuring cheese is cradled inside. Seal the end with water and place seam-side down in baking pan.", "Leave kunafa rolls uncovered at room temperature for about an hour until they dry out slightly. At this point, freeze for later or bake right away.", "Preheat oven to 200C/390F. Pour melted ghee over kunafa rolls to saturate. Bake for 35 to 40 minutes until deep golden brown, flipping once or twice during baking.", "Remove from oven and transfer rolls to kitchen towels to drain excess ghee. While still hot, return to a clean pan and pour cooled syrup over rolls. Allow syrup to soak in, then transfer to serving platter. Sprinkle with ground pistachios if desired."],
    tips: ["Only FRESH kunafa that comes in long strands will work. Frozen kunafa tends to break and is too frizzy for rolling.", "Always keep kunafa covered to prevent it from drying out.", "Ricotta cheese is naturally sweet and neutral — no need to sweeten or flavor it.", "Do not use straight butter; use ghee or clarified butter to prevent charring.", "Kunafa rolls freeze well and can be frozen for up to a month before baking.", "Best served the same day they're made, within a few hours if possible.", "To clarify butter: Melt 2 cups (1 lb/450g) butter slowly over medium low heat until milk solids separate and collect at bottom. Remove from heat, let settle 10 minutes, then skim foam from surface. Slowly pour clear butterfat into a bowl, leaving milk solids behind."]
  },
  {
    id: "mesh-om-ali-phyllo-milk-pie",
    name: "Mesh Om Ali (Phyllo Milk Pie)",
    description: "Pleated sheets of phyllo dough soaked and flavored with sweetened condensed milk and cream, crisp on the outside and creamy on the inside.",
    category: "Middle Eastern",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    totalTime: "50 minutes",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["1 (500g) package phyllo sheets, thawed", "3/4 cup (170g) unsalted butter, melted", "1 (14oz/397g) can sweetened condensed milk", "2 cups (500ml) whipping cream (heavy cream)"],
      "For Serving": ["Ground cinnamon, for dusting on top (optional but recommended)", "Nuts of your choice (optional)"]
    },
    instructions: ["Preheat oven to 200C/390F with rack in middle position.", "Brush melted butter over bottom and sides of an 11\"x15\" (28cmx38cm) baking dish.", "Gather one phyllo sheet at a time and scrunch into a loose fan-like strip. Arrange scrunched sheets side by side in the buttered dish.", "Brush remaining melted butter all over and between the scrunched phyllo, ensuring even coating throughout.", "Bake until phyllo turns deep golden brown, 20 to 25 minutes.", "Remove from oven and drizzle with sweetened condensed milk, followed by whipping cream.", "Return to oven and bake 5 to 10 minutes until edges bubble and phyllo has soaked in most of the mixture.", "Sprinkle with cinnamon and nuts if desired. Cool 10 minutes before serving warm or at room temperature."],
    tips: ["Thaw phyllo overnight in refrigerator or 4-5 hours at room temperature, never microwave.", "Keep phyllo well covered until ready to use.", "Darker golden brown phyllo will be crunchier.", "Best served warm; microwave reheating causes cream to separate.", "Leftovers can be enjoyed at room temperature but taste different than when warm.", "Store covered tightly in plastic wrap or airtight container in refrigerator.", "For a lighter option, use 1 cup whipping cream and 1 cup milk instead of all cream.", "Melted butter may be substituted with clarified butter or ghee."]
  },
  {
    id: "rose-mehalabya-milk-pudding",
    name: "Rose Mehalabya (Milk Pudding)",
    description: "Arabic-style milk pudding infused with rose and orange blossom waters, topped with rose syrup and garnished with caramelized pistachios.",
    category: "Middle Eastern",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    totalTime: "2 hours 45 minutes",
    servings: 8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Mehalabya (Milk Pudding)": ["3 1/4 cups whole milk", "3/4 cup heavy whipping cream", "1/2 cup plus 2 tablespoons (125g) granulated sugar", "1/2 cup (56g) cornstarch", "2 teaspoons orange blossom water, more or less according to taste", "1 teaspoon rose water, more or less according to taste"],
      "Rose Syrup Topping": ["2 tablespoons rose syrup concentrate (sharbat ward)", "1/4 cup plus 2 tablespoons water", "2 teaspoons (5g) cornstarch"],
      "Pistachio Topping": ["2 teaspoons (10g) unsalted butter", "100g (about 1 cup) unsalted pistachios, finely chopped", "1 Tablespoon granulated sugar", "1/2 teaspoon orange blossom water"]
    },
    instructions: ["In a medium saucepan, off the heat, whisk together the milk, heavy whipping cream, sugar and cornstarch until well combined and the cornstarch has dissolved completely without any visible lumps.", "Set the saucepan over medium-high heat and bring to a full boil, whisking constantly. Continue to boil for a few more seconds until the mixture thickens and large bubbles form around the surface.", "Remove the saucepan from the heat and whisk in the orange blossom and rose waters.", "Pour into cups and refrigerate uncovered until the surface has begun to set; about 20 minutes. Meanwhile prepare the Rose Syrup Topping.", "In a very small saucepan, off the heat, whisk together the rose syrup concentrate, water and cornstarch until well combined.", "Set the saucepan over medium-high heat and bring to a full boil, whisking constantly, until the mixture thickens and large bubbles form around the surface.", "Remove the saucepan from the heat and spoon a thin layer of the rose topping over the surface of each mehalabya cup, tilting the cup to cover evenly.", "Refrigerate until set and cold; about 2 hours or up to overnight.", "In a medium skillet, over medium-high heat, melt the butter then add in the pistachios. Saute the pistachios in the butter, stirring frequently, until just beginning to toast. Add in the sugar and stir until melted and lightly caramelized around the pistachios. Off the heat, then add in the orange blossom water. Transfer to another bowl, and allow to cool completely.", "Spoon the pistachio topping evenly over the cooled mehalabya cups. Serve right away or keep refrigerated until ready to serve."],
    tips: ["This mehalabya is a great all-purpose base that you can infuse with the flavoring of your liking. Omit the rose and orange blossom waters and add vanilla instead, for example.", "You can also leave out the rose syrup topping and add your favorite nut mix instead of pistachios.", "Feel free to serve the mehalabya family-style in one big bowl or dish instead of individual servings.", "This recipe can be doubled, tripled, quadrupled or even cut in half or quartered.", "Weighing ingredients using a kitchen scale is highly encouraged for best results."]
  },
  {
    id: "banana-caramel-kunafa-sundae",
    name: "Banana Caramel Kunafa Sundae",
    description: "A Middle Eastern spin on ice cream sundae featuring vanilla ice cream layered with bananas, warm salted caramel sauce and caramelized cinnamon kunafa crumbs for crunch.",
    category: "Middle Eastern",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    totalTime: "45 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Caramelized Cinnamon Kunafa Crumbs": ["1/3 cup plus 1 teaspoon (85g) unsalted butter", "170g kunafa, or kataifi/kadaifi pastry, fresh or frozen", "1/2 cup (100g) granulated sugar", "1/2 teaspoon ground cinnamon"],
      "Salted Caramel Sauce": ["1 cup (200g) granulated sugar", "1/4 cup plus 2 tablespoons water", "1/4 cup (57g) salted butter, diced into 1 tablespoon pieces", "1/2 cup heavy whipping cream, warmed", "1/2 teaspoon fine salt"],
      "Assembly": ["1 liter (2 pint) vanilla ice cream", "4 to 5 large bananas, sliced"]
    },
    instructions: ["Break kunafa into small pieces while semi-frozen.", "Melt butter in large pan over medium heat.", "Add shredded kunafa and stir until evenly coated.", "Cook kunafa, stirring constantly until golden; about 5 minutes.", "Add sugar and stir to coat; continue stirring until evenly golden brown, about 5 more minutes.", "Add cinnamon and stir to combine.", "Transfer kunafa crumbs to bowl and cool completely.", "Bring sugar and water to boil in heavy-bottomed saucepan; cover for 1 minute.", "Cook without stirring, swirling pan occasionally, until amber-colored.", "Remove from heat and whisk in butter until melted.", "Carefully pour in cream and whisk well.", "Return to heat and whisk until smooth.", "Stir in salt and transfer to serving vessel.", "In serving glasses, layer kunafa crumbs, banana slices, ice cream scoop, and caramel sauce.", "Repeat with second layer if desired.", "Serve immediately."],
    tips: ["Sugar should be added after kunafa has been lightly toasted to prevent scorching.", "Kunafa shreds easiest when semi-frozen.", "Cooled caramelized kunafa keeps well, covered tightly, for about a week.", "Store-bought caramel sauce may be substituted.", "Use weight measurements for best results."]
  },
  {
    id: "brown-butter-caramel-snickerdoodles",
    name: "Brown Butter Caramel Snickerdoodles",
    description: "Soft, thick and chewy snickerdoodles made with browned butter and stuffed with a gooey homemade caramel center, rolled in cinnamon sugar.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "9 to 11 minutes",
    totalTime: "3 hours",
    servings: 16,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["2 1/4 cups plus 2 tablespoons (10 5/8oz/300g) all purpose flour", "3/4 teaspoon cream of tartar", "1/2 teaspoon baking soda", "1/2 teaspoon baking powder", "2 teaspoons cornstarch", "1/2 teaspoon salt", "1/2 teaspoon ground cinnamon", "3/4 cup plus 2 tablespoons (7oz/198g) unsalted butter", "1 cup (7oz/200g) packed soft brown sugar, light or dark", "1/4 cup (1 3/4oz/50g) granulated sugar", "1 large egg", "1 large egg yolk", "1 teaspoon vanilla extract or 2 teaspoons imitation vanilla flavoring", "1 tablespoon (1oz/14g) sour cream"],
      "Stuffing": ["1/4 batch homemade Microwave Soft Caramels"],
      "Topping": ["3 tablespoons (1 1/3oz/38g) granulated sugar", "2 teaspoons ground cinnamon"]
    },
    instructions: ["Make and cool caramels according to recipe; cut 8 rectangles in half and shape into rounded 1-inch squares; freeze until ready to use.", "Line baking sheet with parchment paper or silicon mat.", "Whisk together flour, cream of tartar, baking soda, baking powder, cornstarch, salt and cinnamon; set aside.", "Heat butter in light-colored skillet over medium-high heat until melted, about 2 minutes; continue cooking, stirring and scraping until dark golden brown with nutty aroma, 1 to 3 minutes.", "Transfer browned butter to large heatproof bowl, scraping down brown bits.", "Add both sugars to butter and whisk to combine.", "Add egg, egg yolk and vanilla; whisk until smooth and emulsified; stir in sour cream.", "Stir in flour mixture until just combined; do not overmix.", "Using 3 tablespoon ice cream scoop, scoop dough onto lined baking sheet forming 16 equal balls; refrigerate about 1/2 hour if too soft.", "Make deep indentation in each dough ball with wooden spoon handle or thumb.", "Place frozen caramel piece in each indentation; gather dough up and over to completely cover; roll into smooth balls.", "Mix topping ingredients in small bowl; roll cookie dough balls in cinnamon-sugar and place on prepared baking sheet.", "Chill loosely covered for at least 2 hours up to 4 days, or freeze up to 1 month.", "Heat oven to 350F/180C fifteen minutes before baking; adjust rack to middle position.", "Line 2 baking sheets with parchment paper; place 8 cookie balls per sheet, spacing 2 inches apart.", "Bake until cookies flatten with slight dome, edges start to set yet centers are soft and puffy, 9 to 11 minutes; do not overbake.", "Cool cookies on baking sheet for at least 15 minutes before serving; or cool completely and store in airtight container."],
    tips: ["Weighing ingredients is highly recommended for accuracy.", "If no cream of tartar is available, omit it and baking soda; use 1 1/2 teaspoons baking powder total instead.", "Use soft brown sugar that feels like damp sand; avoid hardened brown sugar.", "Use a light-colored skillet to brown butter; nonstick coating makes it difficult to see browning.", "Freezing caramels before stuffing makes the process less messy but is optional.", "Chill dough for thicker, less-spread cookies with better results.", "Cookies continue baking after removal from oven due to residual heat."]
  },
  {
    id: "biscoff-explosion-cookies",
    name: "Biscoff Explosion Cookies",
    description: "Soft and chewy cookies made from Biscoff cookie crumbs with a creamy Biscoff spread filling that creates a lava-like center when eaten warm.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "10 minutes",
    totalTime: "1 hour 55 minutes",
    servings: 14,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["14 Biscoff/Lotus cookies, ground into fine crumbs (makes 1 cup, 4oz, 113g)", "1 1/4 cups (5 1/4oz, 148g) all-purpose flour", "1/2 teaspoon baking soda", "3/4 teaspoon salt", "1/2 teaspoon ground cinnamon", "1/2 cup (4oz, 113g) unsalted butter, softened at room temperature", "1/4 cup (2oz, 57g) creamy Biscoff cookie butter", "1/2 cup (3 1/2oz, 100g) packed light brown sugar", "1/3 cup (2 1/2oz, 73g) granulated sugar", "1 large egg, at room temperature", "1 teaspoon vanilla extract"],
      "Biscoff Center": ["14 tablespoons creamy Biscoff cookie butter"],
      "Garnish (optional)": ["4 Biscoff/Lotus cookies, broken into small chunks"]
    },
    instructions: ["Line a baking sheet with parchment paper and scoop 14 tablespoons of Biscoff cookie butter onto it. Freeze until solid, at least one hour or overnight.", "Preheat oven to 350F/180C and line 2 baking sheets with silicon mats or parchment paper.", "Whisk together Biscoff cookie crumbs, flour, baking soda, salt, and cinnamon; set aside.", "Beat butter and Biscoff cookie butter together until smooth and creamy, about 1 minute.", "Add both sugars and beat until lightened and fluffy, 3 to 5 minutes.", "Mix in egg and vanilla extract until well combined.", "Gradually add flour mixture on lowest speed until just incorporated. Do not overmix.", "Divide cookie dough into 14 equal balls and arrange 2 inches apart on prepared sheets.", "Make a deep indentation in each dough ball using a wooden spoon handle or thumb.", "Remove frozen Biscoff scoops from freezer and working quickly, place one in each indentation.", "Gather dough over Biscoff scoops to completely cover, then roll into balls.", "Press Biscoff cookie chunks onto top of each cookie for garnish.", "Optionally freeze cookies for 2 hours or up to 1 month for thicker cookies, or bake immediately.", "Bake one sheet at a time for 10 to 11 minutes until golden brown, flattened but puffy, with soft centers.", "Transfer to wire rack and cool on baking sheets for at least 15 minutes before eating."],
    tips: ["Use soft, moist brown sugar like Dominos brand, not coarse granular types.", "The Biscoff center will ooze out like lava if eaten within an hour of baking.", "After cooling to room temperature, the center will set but remain soft.", "Store in an airtight container to maintain softness.", "Do not overbake or cookies will become hard instead of soft and chewy.", "Cookie dough balls can be chilled in refrigerator up to 3 days or frozen up to 1 month.", "When baking frozen dough, add an extra 2 minutes to baking time.", "Weighing ingredients with a kitchen scale is highly recommended for best results."]
  },
  {
    id: "strawberry-cream-cake",
    name: "Strawberry Cream Cake",
    description: "Three layers of soft vanilla cake infused with strawberry juice, topped with glazed fresh strawberries and stabilized whipped cream that won't weep.",
    category: "Cakes",
    prepTime: "1 hour",
    cookTime: "25 minutes",
    totalTime: "2 hours 55 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["1 (15 1/4oz/432g) vanilla cake mix", "1 cup (125g) all purpose flour", "1 cup (200g) granulated sugar", "1/2 teaspoon salt", "1 cup (242g) sour cream", "1 cup (237ml) water", "3 large eggs", "1 teaspoon vanilla extract"],
      "Strawberry Filling": ["1 1/2 lbs (680g) fresh strawberries, stemmed and diced into 1/2 inch pieces (4 cups)", "3 to 4 tablespoons (38g to 50g) granulated sugar", "1 1/2 teaspoons water or lemon juice", "1/2 teaspoon cornstarch", "About 16 large fresh strawberries, stemmed and sliced in half vertically (1lb/450g)"],
      "Stabilized Whipped Cream": ["3 cups (700ml) very cold whipping cream, divided", "1/2 cup (57g) powdered sugar", "1 tablespoon (7g) cornstarch", "1 teaspoon vanilla extract"],
      "Topping": ["8 whole fresh strawberries, with stems (8oz/227g)"]
    },
    instructions: ["Prepare cooked portion of stabilized whipped cream as it needs time to cool.", "Preheat oven to 350F/180C with rack in middle position.", "Spray 3 (9-inch) round pans with nonstick spray, line with parchment, and dust with flour.", "Whisk together cake mix, flour, sugar and salt.", "Add sour cream, water, eggs and vanilla; beat on medium speed until smooth.", "Evenly divide batter into prepared pans.", "Bake 18 to 22 minutes until toothpick comes out clean or with few moist crumbs.", "Cool in pans 10 minutes, then invert onto wire racks and cool completely.", "Toss diced strawberries with sugar, cover and set aside for 1 1/2 to 3 hours.", "Whisk powdered sugar and cornstarch, gradually stir in 3/4 cup cream.", "Heat mixture over medium-high, stirring constantly until thickened like pudding.", "Cool to room temperature, then add vanilla.", "Beat remaining cold cream until beater marks appear, add cooled mixture in steady stream, whip to stiff peaks.", "Drain strawberries, reserve juice; mix 2 tablespoons juice with cornstarch and microwave until thick.", "Stir thickened juice into diced strawberries to glaze.", "Level cake layers if domed.", "Place first cake layer on platter, brush with 1/3 strawberry juice.", "Arrange strawberry halves around perimeter, add half glazed berries in center, spread 1/3 whipped cream.", "Place second cake layer, repeat juice, berries, and cream.", "Top with final layer, brush with remaining juice, spread remaining cream, decorate with whole and halved strawberries."],
    tips: ["Do not overbake; bake just until cake springs back when lightly touched.", "Ensure whipping cream is very cold and whip in chilled bowl.", "Cool cake layers completely before filling to prevent cream from melting.", "Assemble cake within 4 hours of serving for freshest taste.", "Stabilized whipped cream holds well in refrigerator for 24 hours on cake.", "Cake is best eaten the same day it's made due to fresh fruit.", "Use Betty Crocker French Vanilla or any white/vanilla cake mix.", "Greek yogurt can substitute for sour cream.", "Cake layers can be made days ahead and frozen."]
  },
  {
    id: "creme-brulee-mille-crepe-cake",
    name: "Creme Brulee Mille Crepe Cake",
    description: "Twenty layers of delicate crepes smothered with vanilla bean whipped pastry cream, topped with a thin layer of crunchy caramelized sugar.",
    category: "Cakes",
    prepTime: "1 hour 30 minutes",
    cookTime: "1 hour",
    totalTime: "3 hours 30 minutes",
    servings: 1,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Crepes": ["1 1/2 cup (6 5/8 ounces/188 grams) all purpose flour", "6 tablespoons (2 5/8 ounces/75 grams) sugar", "1/2 teaspoon salt", "3 cups whole milk", "6 tablespoons (3 ounces/85 grams) unsalted butter, melted", "6 large eggs", "1 1/2 teaspoons vanilla extract"],
      "Pastry Cream Filling": ["1 1/2 cups whole milk, divided", "1 vanilla bean or 1 tablespoon vanilla bean paste or 1 tablespoon vanilla extract", "4 1/2 tablespoons (2 ounces/56 grams) sugar", "3 tablespoons (7/8 ounce/24 grams) cornstarch", "1/4 teaspoon salt", "3 egg yolks", "1 1/2 tablespoons (3/4 ounce/21 grams) unsalted butter"],
      "Whipped Cream (for folding into pastry cream)": ["3 cups heavy whipping cream", "3 tablespoons (1 1/3 ounce/37 grams) granulated sugar"],
      "Bruleed Topping": ["2 to 4 tablespoons (25 to 50 grams) granulated sugar"]
    },
    instructions: ["Whisk together the flour, sugar, and salt in a large bowl.", "In another bowl, whisk together the milk, butter, eggs and vanilla until well combined. Pour the milk mixture over the flour mixture and whisk until well incorporated. Use an immersion blender to further mix until very smooth and lump-free.", "Cover with plastic wrap and refrigerate for at least 2 hours and up to 24 hours. Meanwhile, prepare the pastry cream.", "Whisk the batter before cooking to reincorporate. Place 1/2 teaspoon oil in a 12-inch nonstick skillet and heat over medium heat until shimmering. Wipe out skillet leaving a thin film of oil.", "Pour 1/4 cup batter into far side of pan and tilt and shake gently until batter evenly covers the bottom. Cook until surface is dry and crepe starts to brown at edges, about 1 minute. Loosen and gently flip; cook until second side is lightly spotted, about 30 seconds.", "Transfer crepe to parchment-lined baking sheet. Repeat with remaining batter, stacking crepes. Allow to cool completely.", "In a medium saucepan, pour 1 cup milk and the seeds and pod of a scraped vanilla bean or vanilla bean paste. Heat over medium heat until simmering.", "While milk heats, whisk together sugar, cornstarch and salt in a small bowl. Whisk in remaining 1/2 cup milk, followed by the yolks.", "When milk simmers, slowly pour hot milk into egg yolk mixture while whisking continuously. Return to saucepan and reheat over medium heat, whisking constantly, until thickened and glossy. Strain through fine-mesh sieve. Add butter and whisk until smooth.", "Press plastic wrap directly on surface and refrigerate until cold and set; about 1 hour or up to overnight.", "When ready to assemble, combine heavy whipping cream and 3 tablespoons sugar in chilled bowl and beat to stiff peaks.", "Gently fold whipped cream into cooled pastry cream until evenly colored with no streaks.", "Place one crepe on cake platter. Top with about 1/3 cup filling and spread into a thin layer. Repeat, alternating layers until you reach 20 layers of crepe.", "Refrigerate assembled cake for 1 to 2 hours. For bruleed top, sprinkle surface with 2 to 4 tablespoons sugar and caramelize with a kitchen torch. Refrigerate until topping is no longer warm. Serve cold or at room temperature."],
    tips: ["Let crepe batter rest in the fridge for at least 2 hours before cooking to ensure even crepes with minimal holes.", "The first crepe is typically for practice.", "Use a reliable non-stick pan to prevent sticking.", "Cook crepes until golden brown on both sides; colorless crepes lack flavor.", "Make sure pastry cream is thick enough and whipped cream is whipped to stiff peaks before folding together.", "For the bruleed topping, use a kitchen torch and refrigerate again until no longer warm.", "Weighing ingredients with a kitchen scale is highly encouraged for best results.", "Recipe adapted with changes from Rosanna Pansino."]
  },
  {
    id: "upside-down-date-cake",
    name: "Upside Down Date Cake",
    description: "A Middle Eastern classic with soft, moist vanilla cake topped with lightly candied black dates, best served warm for ultimate comfort.",
    category: "Cakes",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    totalTime: "1 hour 15 minutes",
    servings: 9,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Date Topping": ["24 to 28 black or rottab dates, NOT dried dates (about 600 grams with pits and skin on)", "1/3 cup (76g) unsalted butter", "1/2 cup plus 1 tablespoon (113g) granulated sugar"],
      "Cake": ["1 cup plus 5 tablespoons (160g) all purpose flour, preferably weighed", "3 tablespoons (21g) cornstarch (cornflour)", "1 teaspoon baking powder", "1/4 teaspoon baking soda", "1/4 teaspoon fine salt", "1/2 cup (114g) unsalted butter, softened to room temperature", "1 cup (200g) granulated sugar", "2 large eggs (at room temperature)", "2 one gram packets vanilla sugar (or 3/4 teaspoon pure vanilla extract; 1 1/2 teaspoons if using imitation vanilla flavoring)", "1/2 cup (114g) sour cream (at room temperature)"]
    },
    instructions: ["Adjust oven rack to lower middle position, set a rimmed baking sheet or round pan larger than 9-inches on the rack, and heat oven to 180C/350F. Allow the baking sheet/pan to become very hot.", "Spray (or butter and flour) the sides ONLY of a 9-inch round cake pan; leave the bottom ungreased.", "Peel the dates by sliding the skin off with your fingers. Cut dates in half and remove pits. Set date halves aside.", "In a medium saucepan, heat the butter and sugar over medium-high heat until butter melts. Continue cooking, whisking constantly until the sugar caramelizes and turns golden brown; about 3 minutes.", "Transfer the caramelized sugar mixture into the bottom of the prepared pan. Working quickly, spread into an even layer.", "Arrange the date halves, cut-side up, in a circular fashion over the caramelized sugar mixture to cover the entire bottom.", "In a medium bowl, whisk together the flour, cornstarch, baking powder, baking soda, salt and vanilla sugar (if using).", "In a stand mixer fitted with the paddle attachment, beat the butter on medium speed until creamy, about 1 minute.", "With the mixer running on medium-low speed, gradually add the sugar. Raise speed to medium-high and beat until lightened in color and texture; 4 to 5 minutes.", "Add the eggs one at a time, beating well after each addition. Add vanilla extract if using liquid form.", "On lowest speed, add one-third of the flour mixture and mix until mostly combined. Add half the sour cream, another third of flour, remaining sour cream, and end with last third of flour. Mix until just combined. Transfer batter to pan and smooth over dates.", "Place cake pan on the hot baking sheet in the oven. Bake for 45 to 50 minutes until center springs back when lightly touched and a skewer comes out clean. Tent with foil if browning too quickly.", "Cool in pan for about 5 minutes, then invert onto a serving platter.", "Serve warm or at room temperature. Store leftovers in an airtight container; refrigeration is not advised as it can dry out the crumb."],
    tips: ["Black (or rottab) dates are a special type that turn soft and dark brown as they ripen. They are not interchangeable with dried dates in this recipe.", "Black dates are easily accessible in the Middle East around Fall months but can be stored in the freezer for later use. Thaw before peeling if using from frozen.", "Weighing ingredients, especially flour, is ideal for consistency. If no kitchen scale, use the Spoon and Sweep method.", "Some readers have had issues with hardened caramel sticking to the pan. Alternatively, skip caramelization and just mix room temperature butter with sugar and spread on bottom.", "Baking the cake over a super hot pan preheating in the oven guarantees the caramelized sugar will coat the dates instead of sticking to the pan."]
  },
  {
    id: "hot-fudge-pudding-cake",
    name: "Hot Fudge Pudding Cake",
    description: "A scaled-up version of the popular Molten Chocolate Mug Cake that serves a crowd, featuring a fluffy cake exterior with a molten, saucy chocolate interior.",
    category: "Cakes",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    totalTime: "40 minutes",
    servings: 6,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["1 cup (120 grams) all purpose flour", "1 cup (200 grams) granulated sugar", "1/2 cup (44 grams) unsweetened cocoa powder (sift if lumpy)", "2 teaspoons baking powder", "1/4 teaspoon salt", "3/4 cup (172 grams) unsalted butter, melted", "3/4 cup (177ml) whole milk, slightly warmed", "3 large eggs", "1 teaspoon vanilla extract (or 2 teaspoons if using imitation vanilla flavoring)", "4 oz (114 grams) lightly broken up semisweet chocolate", "1/4 cup (60ml) water"],
      "To Serve (optional)": ["Vanilla ice cream", "Berries of your choice"]
    },
    instructions: ["Preheat oven to 200C/392F on medium rack. Spray an 8-inch square (or 7x10-inch) baking dish with nonstick spray.", "Whisk together flour, sugar, cocoa powder, baking powder, and salt in a large bowl.", "In another bowl, whisk together melted butter, milk, eggs, and vanilla until combined.", "Pour milk mixture over dry ingredients and whisk until smooth batter forms.", "Pour batter into prepared pan and spread evenly. Arrange chocolate pieces in a single layer on surface.", "Evenly drizzle water over the chocolate-studded batter.", "Bake 15-23 minutes until edges are set and springy but center is slightly wobbly. Avoid overbaking.", "Cool for 10 minutes, then serve warm with ice cream and berries if desired. Cover leftovers and store at room temperature."],
    tips: ["Do NOT overbake — baking time determines whether you get a spongy or molten cake. Watch for visual cues: edges springy to touch, center still jiggly.", "Ceramic dishes bake faster than glass, so monitor accordingly.", "Use quality chocolate you enjoy eating, or substitute dark, milk, chips, or omit entirely.", "Warming milk briefly prevents solidifying the melted butter.", "This cake is best served warm within an hour, but cooled portions can be reheated briefly in microwave.", "A doubled recipe fits well in a 13x9-inch dish with adjusted baking time."]
  },
  {
    id: "chocolate-baklava-bracelets-asawer-el-sit",
    name: "Chocolate Baklava Bracelets (Asawer El Sit)",
    description: "Delicately crisp phyllo rings with a creamy chocolate center, a sprinkling of sea salt and crunchy pistachios.",
    category: "Middle Eastern",
    prepTime: "1 hour 10 minutes",
    cookTime: "25 minutes",
    totalTime: "1 hour 50 minutes",
    servings: 60,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["3/4 cup (150g) granulated sugar", "1/4 cup plus 2 tablespoons water", "Small squeeze of lemon juice"],
      "Baklava Bracelets": ["1 (500g) package phyllo dough, thawed", "1/2 cup plus 2 tablespoons (140g) melted ghee (or clarified butter)", "3 packages (90g each) Cadbury Dairy Milk, plain", "Sliced pistachios, for garnish", "Sea salt flakes (optional)"]
    },
    instructions: ["Combine sugar, water and lemon juice in saucepan. Heat over high heat without stirring. Once boiling, reduce to low and simmer 5 minutes until thickened. Cool completely.", "Preheat oven to 160C/320F with rack in lower middle position.", "Unfold phyllo on cutting board and flatten. Cut stack in half, then cut each half in quarters to create 4 equal squares. Cover with plastic wrap and damp towel.", "Place long rod at edge of phyllo square. Loosely roll phyllo around rod, leaving last 2cm unrolled.", "Push both ends of rolled phyllo toward center to shirr like an accordion.", "Slide phyllo off rod and curve to form circle, pressing ruffled end to create flat base. Press ends together to adhere. Repeat with remaining squares.", "Arrange bracelets on baking sheet touching one another. Brush with melted ghee.", "Bake 25-30 minutes until crisp and golden brown.", "Immediately pour cooled syrup over hot bracelets. Place Cadbury square in center of each while warm. Heat will melt chocolate; if needed, return to warm oven briefly.", "Use toothpick to swirl chocolate across ring base. Sprinkle sea salt flakes and pistachios.", "Cool completely until chocolate sets before serving. Store covered with foil for about 1 week."],
    tips: ["Always thaw phyllo in refrigerator overnight or at room temperature 4-5 hours; do not microwave.", "Keep unused phyllo covered with plastic wrap topped with damp towel to prevent drying.", "Arrange bracelets touching on pan to prevent opening during baking.", "Use high-quality phyllo brand with few tears.", "For clarified butter: melt 200g butter slowly, let milk solids settle, skim foam, pour clear butterfat into bowl."]
  },
  {
    id: "fabulous-kahk-eid-cookies",
    name: "Fabulous Kahk (Eid Cookies)",
    description: "Traditional Egyptian Eid cookies with a delicate melt-in-your-mouth texture, lightly spiced and buttery, filled with honey, dates, or nuts, then dusted with powdered sugar.",
    category: "Middle Eastern",
    prepTime: "2 hours",
    cookTime: "25 minutes",
    totalTime: "3 hours 25 minutes",
    servings: 135,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop",
    ingredients: {
      "Kahk Dough": ["1 kg (8 cups) all purpose flour", "65g (1/2 cup plus 1 tablespoon) powdered sugar, plus extra for coating", "1/4 cup (40g) toasted sesame seeds (optional, but highly recommended)", "1 1/2 teaspoons (6g) baking powder", "1 teaspoon instant yeast (optional)", "1/8 teaspoon salt", "1 tablespoon (10g) Kahk Essence (Reehet El Kahk)", "One 1g packet vanilla powder (or 1/4 teaspoon vanilla extract)", "600g (2 1/2 cups plus 2 tablespoons) ghee or clarified butter, at room temperature", "160g (2/3 cup) milk, at room temperature"],
      "Agameya (Honey Filling)": ["2 tablespoons (25g) ghee or clarified butter", "1/4 cup (32g) all-purpose flour", "3/4 cup (250g) honey", "1 1/2 tablespoon (15g) toasted sesame seeds", "1/4 teaspoon Kahk Essence (Reehet El Kahk) (optional)", "1/4 cup (28g) finely chopped walnuts or favorite nut (optional)"],
      "Malban (Turkish Delight Filling)": ["500g plain Turkish Delight (malban sada)", "1 tablespoon (12g) ghee or clarified butter", "2 tablespoons (20g) toasted sesame seeds", "1/4 teaspoon Kahk Essence (Reehet El Kahk) (optional)", "2/3 cup (75g) finely chopped walnuts or favorite nut (optional)"],
      "Agwa (Date Paste Filling)": ["500g soft, high quality date paste (agwa)", "1 tablespoon (12g) ghee or clarified butter, or more", "2 tablespoons (20g) toasted sesame seeds (optional)", "1/4 teaspoon Kahk Essence (Reehet El Kahk) (optional)"],
      "Other Filling Options": ["Leave them plain", "Toasted walnuts, about 250g, chopped into large chunks", "Toasted pistachios, about 250g"]
    },
    instructions: ["Begin by cooking the Agameya, if using, as it needs to cool completely. Prepare all fillings by rolling into macadamia nut-sized balls. Arrange on parchment-lined baking sheets and refrigerate.", "Adjust oven rack to middle position and preheat oven to 160C/320F.", "In a stand mixer with paddle attachment, whisk together flour, powdered sugar, sesame seeds, baking powder, instant yeast, salt, kahk essence and vanilla powder.", "Add the ghee and mix on medium-low until well blended and dry ingredients are evenly coated. Raise speed to medium and continue mixing until dough turns creamy and paste-like; 1 to 2 minutes.", "With mixer on low, gradually pour in the milk. Continue mixing until a cohesive dough comes together. Do not over mix. Test by rolling an apricot-size piece between hands and pressing gently; the dough should not crack.", "Using a measuring tablespoon or tablespoon-sized scoop, scoop out tablespoons of dough. You should have approximately 135 dough scoops.", "Roll each dough into a ball, press center with thumb to make an indentation. Add filling of choice, then gather dough over filling to completely cover. Roll into a smooth ball without cracks.", "Arrange dough balls on silicon mat or parchment-lined baking sheet, leaving an inch of space between each.", "Press lightly with a kahk stamper or decorate with kahk shaping tweezers. If unavailable, make a cross hatch design with fork tines. Do NOT stamp agameya-filled dough as this could tear the dough.", "Bake until blonde on top and bottom takes on a light golden brown color; about 18 to 22 minutes. Be careful not to overbake agameya and malban ones.", "Cool for a few minutes on baking sheet, then transfer to wire rack to cool COMPLETELY before dusting with powdered sugar.", "Using a small sieve, dust generously with powdered sugar or roll into a bowl full of sugar.", "Serve or store in a container. Kahk will keep well at room temperature for weeks.", "For Agameya: Melt ghee in a small saucepan over medium-high heat. Add flour and cook, stirring constantly, until golden blonde. Add honey and bring to a boil, stirring constantly. Cook until barely thickened and candy thermometer reads 118C/245F. Remove from heat and stir in sesame seeds, kahk essence and nuts. Refrigerate until firm but shapeable, then roll into small balls with greased hands.", "For Malban: Knead Turkish Delight with ghee, sesame seeds and kahk essence until soft and pliable. Knead in walnuts if desired. Roll into small balls with greased hands.", "For Agwa: Knead date paste with ghee, sesame seeds and kahk essence until soft and pliable. Add more ghee if paste is stiff. Roll into small balls with greased hands."],
    tips: ["Weigh all ingredients using a kitchen scale for maximum accuracy, including the milk.", "Use the best quality ghee you can find.", "Butter cannot be used unless clarified first.", "For longer shelf life, heat ghee until super hot, then transfer to a heat-proof bowl and refrigerate until room temperature.", "The yeast is added for flavor purposes only; it does not lift or rise the dough.", "Kahk Essence is a powdered mixture of spices (mahlab, cardamom, bay leaves, rose rice, cloves, fennel) or can be substituted with rose water.", "This recipe makes amazing mini-sized kahk too (size of a grape) -- bake for 10 to 12 minutes without stamping.", "Do not stamp agameya-filled kahk as this could let filling ooze out.", "Cool cookies completely before dusting with powdered sugar to prevent sugar from melting.", "Kahk keeps well at room temperature for weeks.", "Freeze agameya-filled kahk balls briefly to help prevent bursting during baking."]
  },
  {
    id: "knafeh-na-ameh",
    name: "Knafeh Na'ameh",
    description: "A perfected homemade version of the Levantine specialty featuring a delicately crunchy smooth knafeh crust cradling a molten layer of gooey cheese, finished with scented sugar syrup.",
    category: "Middle Eastern",
    prepTime: "40 minutes",
    cookTime: "15 minutes",
    totalTime: "2 hours 55 minutes",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop",
    ingredients: {
      "Scented Sugar Syrup": ["2 cups (400g) granulated sugar", "1 cup (230g) water", "Squeeze of lemon", "2 teaspoons orange blossom water", "1/2 teaspoon rose water"],
      "Cheese Filling": ["500g Shelal cheese (preferably without black sesame)", "300g Akkawi Tchiki Cheese"],
      "Knafeh Crust (Farkeh)": ["375g kunafa (kataifi dough), fresh or frozen", "1/3 cup plus 2 tablespoons (94g) melted ghee or clarified butter", "3 tablespoons (60g) scented sugar syrup", "3 tablespoons (45g) water", "2 tablespoons (30g) ghee or clarified butter, at room temperature", "Ground pistachios, for garnish (optional)"]
    },
    instructions: ["Combine sugar, water, and lemon juice in a saucepan over medium-high heat, avoiding stirring to prevent crystallization. Once boiling, stop stirring.", "Reduce heat to low and simmer for no longer than 10 minutes. Stir in orange blossom and rose waters.", "Transfer syrup to a bowl and cool to room temperature before using.", "Thinly slice both cheeses and place in separate bowls with lukewarm water. Soak for 2 to 6 hours, changing water every 30 minutes, until no longer salty.", "Drain both cheeses through a colander, squeezing out excess liquid. Crumble together and set aside in colander.", "Process kunafa in spice grinder in batches until finely ground and powdery. Mix with ghee, syrup, and water until it resembles couscous and sticks when squeezed.", "Transfer kunafa mixture to a large skillet over medium heat. Toast while stirring continuously, avoiding browning, until dry and sandy. Process to smooth out lumps or strain through a mesh sieve.", "Brush a 34cm aluminum or copper pan with room temperature ghee. Remove 3 tablespoons of farkeh and set aside. Evenly press remaining farkeh into pan, compressing into a compact layer about 3/4cm thick.", "Spread cheese mixture over the crust, leaving a 2cm border around edges uncovered.", "Set pan over one side of stovetop with flame covering only half the bottom. Rotate pan continuously while patting cheese with a cloth to absorb moisture. Continue until edge of crust turns deep golden brown and cheese is mostly melted, 10 to 15 minutes.", "Cover pan and let rest a few minutes. Sprinkle reserved farkeh over cheese to absorb excess moisture.", "Grease serving platter with ghee and invert knafeh so cheese is on bottom and crust on top. Pour cooled syrup over surface and spread evenly. Garnish with ground pistachios if desired.", "Cut into squares and serve immediately while warm and cheese is gooey. Reheat over a simmering water bath if serving later."],
    tips: ["Work can be spaced over several days to avoid stress on serving day.", "Sugar syrup can be made months in advance; farkeh can be toasted, sifted, and frozen for months.", "Cheese soaking should ideally be done the night before.", "Pan must be aluminum or copper; other materials cannot handle stovetop heat.", "Position pan over only half the stove to prevent center from burning before sides cook.", "Only cook on stovetop, not in oven, for proper texture and browning.", "Knafeh is best eaten the same day it is made.", "Rose and orange blossom waters are optional.", "Cheese alternative combinations are available if specific varieties are unavailable."]
  },
  {
    id: "nutella-biscotti",
    name: "Nutella Biscotti",
    description: "Hazelnut-flavored biscotti filled with Nutella all the way through for the ultimate coffee break indulgence.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "40 minutes",
    totalTime: "3 hours 10 minutes",
    servings: 30,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["100g (about 2/3 cup) hazelnuts, skinned and toasted", "2 1/2 cups (300g) all purpose flour (preferably weighed)", "1 1/2 teaspoon baking powder", "1/2 teaspoon salt", "3/4 cup (170g) unsalted butter, softened to room temperature", "1/2 cup (100g) soft light brown sugar, packed", "1/2 cup (100g) granulated sugar", "2 large egg yolks, at room temperature", "1 teaspoon vanilla extract (or 2 teaspoons if using imitation vanilla flavoring)", "2 cups (460g) slightly cooled Nutella"]
    },
    instructions: ["Adjust oven rack to middle position and preheat oven to 150C/300F. Line a baking sheet with parchment paper or silicon mat.", "In a medium bowl, whisk together the flour, baking powder and salt.", "Take a heaping 1/4 cup of the flour mixture and place in a spice/coffee grinder or food processor with the hazelnuts. Pulse until hazelnuts are very finely ground and powdery. Work in two batches if needed.", "Transfer the ground hazelnut/flour mixture to the bowl with the reserved flour. Whisk together until well combined.", "In a stand mixer fitted with the paddle attachment, beat together the butter, brown sugar, and granulated sugar on medium-high speed until slightly lightened; about 2 minutes.", "Add in the egg yolks one at a time, mixing after each addition. Then beat in the vanilla.", "With mixer on lowest speed, gradually add in ground hazelnut/flour mixture until just combined. Mixture will be crumbly; do not overmix.", "Gather the dough into a smooth, taut ball, then cut in half evenly. Cut each half in half, making one slightly bigger than the other. You should now have 4 quarters of dough; 2 slightly larger than the other 2.", "Pat one of the smaller quarters into a 12\"x3\" rectangle of even thickness on the parchment-lined baking sheet. Use a spoon or piping bag to center the Nutella down the length of the dough, leaving a 1cm border around edges.", "Pat and roll one of the larger quarters on a separate piece of parchment into a 12\"x4\" rectangle. Transfer the dough over the Nutella-topped dough, line the long sides together, then carefully place over top. Peel off parchment from top dough and press all around edges to seal. Repeat with other 2 quarters.", "Bake until loaves are deep golden and edges are firm to the touch; 40 to 45 minutes. Allow to cool on baking sheet until cool enough to handle; about 30 minutes. Cool completely on wire rack.", "Transfer loaves to cutting board. Using a serrated knife with gentle sawing motion, score each loaf's surface into 1-inch-thick slices. Then switching to a sharp chef's knife, cut through the scores using one heavy press.", "Serve with coffee or tea, dipping them in the hot drink if desired. Store leftovers in an airtight container."],
    tips: ["Slightly cooled Nutella makes for a mess-free process because it doesn't run over the dough. Stick the jar of Nutella in the fridge as you prepare the biscotti dough.", "Weighing ingredients, especially flour, is ideal in baking due to its consistency.", "Do not over-crowd your grinder with the flour/hazelnut mixture, as that risks turning it into hazelnut butter.", "Bake low and slow to give the dough a chance to bake all the way through. Higher temperatures caused the crust to bake nicely but the inside became dense and doughy.", "Due to skipping the second bake, the cookies are not as violently crunchy as classic biscotti, but they have a pleasant chew to them."]
  },
  {
    id: "pistachio-baklava-cheesecake",
    name: "Pistachio Baklava Cheesecake",
    description: "A fusion dessert combining flaky and crispy baklava pastry layers with a creamy, rich cheesecake filling, ground pistachios, and aromatic sugar syrup.",
    category: "Cheesecakes",
    prepTime: "20 minutes",
    cookTime: "55 minutes",
    totalTime: "1 hour 15 minutes (plus 4+ hours chilling)",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=400&fit=crop",
    ingredients: {
      "Baklava Layers": ["12-15 layers filo pastry", "3 tbsp clarified butter, melted"],
      "Pistachio Layer": ["200g finely ground pistachios (+ 2 tbsp for garnish)", "1/3 cup unsalted butter, melted", "4 tbsp granulated sugar"],
      "Cheesecake Batter": ["600g cream cheese, room temperature", "1/2 cup heavy cream", "1/2 cup caster sugar", "4 tbsp cornstarch", "1 tbsp orange blossom essence", "3 large eggs, room temperature"],
      "Sugar Syrup": ["1 cup granulated sugar", "1/2 cup honey", "3/4 cup water", "2 tbsp lemon juice", "1 tbsp orange blossom essence"]
    },
    instructions: ["Preheat oven to 180°C; prepare 8-inch springform pan with butter and parchment.", "Layer 8 filo sheets with clarified butter; bake 15 minutes until golden.", "Combine ground pistachios, melted butter, and sugar.", "Prepare syrup by boiling sugar, honey, lemon juice, and water; simmer 5-10 minutes; cool.", "Mix cream cheese and caster sugar; add cream, orange blossom essence, and cornstarch.", "Add eggs one at a time, mixing until smooth.", "Spread 3/4 pistachio mixture on cooled filo base; pour cheesecake filling; add butter-coated filo sheet.", "Top with remaining pistachio mixture and crumpled filo sheets arranged circularly.", "Bake 55-60 minutes until sides set and top golden; cool in oven with door ajar.", "Pour cooled syrup over cheesecake; chill minimum 4 hours (preferably overnight); garnish with ground pistachios."],
    tips: ["Bring all ingredients to room temperature before starting.", "Mix gently to prevent cracking.", "Firmly press filo layers into the pan.", "Cool gradually in the oven with the door ajar.", "Apply syrup carefully and evenly.", "Refrigerate overnight for optimal results."]
  },
  {
    id: "kunafa-rolls",
    name: "Kunafa Rolls",
    description: "A delightful fusion of traditional Middle Eastern flavors and a modern twist, featuring ricotta filling infused with orange zest, orange blossom, and cardamom, baked golden and drizzled with fragrant sugar syrup.",
    category: "Middle Eastern",
    prepTime: "30 minutes",
    cookTime: "40 minutes",
    totalTime: "1 hour 10 minutes (plus 1 hour resting)",
    servings: 14,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    ingredients: {
      "Sugar Syrup": ["2 cups sugar", "1 cup water", "1/2 lemon, juiced", "1 tsp orange blossom water"],
      "Ricotta Filling": ["400g ricotta cheese", "1 tbsp icing sugar", "1 tsp orange zest", "Pinch cardamom powder"],
      "Kunafa Rolls": ["500g fresh kunafa", "2 cups clarified butter, melted and cooled slightly", "Ground pistachios (for garnish)"]
    },
    instructions: ["Combine sugar and water in saucepan over medium-high heat; boil while stirring until dissolved. Simmer 10 minutes without stirring. Remove from heat, stir in orange blossom water, and cool.", "Mix ricotta cheese, orange zest, orange blossom water, and cardamom powder in a bowl.", "Cut kunafa into 5x12cm strips (keep unused portions covered with damp towel). Form T shapes, fill with ricotta mixture, roll tightly into cigar shapes seam-side down in greased pan.", "Rest baking pan at room temperature for one hour until pastry dries.", "Preheat oven to 200°C. Pour clarified butter over rolls and bake 35-40 minutes until golden brown.", "Transfer to kitchen towel to drain excess butter. Pour sugar syrup over rolls, allowing it to soak in. Garnish with ground pistachios before serving."],
    tips: ["Keep unused kunafa covered with a damp towel to prevent drying.", "Store cooled rolls in airtight containers with parchment between layers.", "Refrigerate up to 3-4 days or freeze up to 2 months.", "Reheat in 180°C oven for 10-15 minutes; avoid microwaving to maintain crispness."]
  },
  {
    id: "dubai-chocolate-cookies",
    name: "Dubai Chocolate Cookies",
    description: "These highly requested Dubai chocolate cookies combine creamy pistachio, crunchy kataifi, and rich chocolate into an irresistible treat inspired by the viral Dubai chocolate bar.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "12 minutes",
    totalTime: "42 minutes",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1625876981260-1f9372725bae?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["Note: Full ingredient list was not available from the fetched page data. Please visit sugarspunrun.com for complete details."]
    },
    instructions: ["Note: Full instructions were not available from the fetched page data. Please visit sugarspunrun.com for complete details."],
    tips: ["Dubai chocolate's unique appeal comes from the combination of light nuttiness from pistachio cream, toasty crunch from kataifi, and a snappy sweet chocolate shell.", "These cookies don't require refrigeration but will last longer (up to a week) if chilled, versus 3-4 days unrefrigerated."]
  },
  {
    id: "the-best-fudgy-brownies",
    name: "The Best Fudgy Brownies",
    description: "Rich, fudgy, chocolatey, and incredibly decadent brownies made with a combination of semi-sweet and dark chocolate for the ultimate chocolate experience.",
    category: "Brownies",
    prepTime: "25 minutes",
    cookTime: "25 minutes",
    totalTime: "50 minutes",
    servings: 16,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&h=400&fit=crop",
    ingredients: {
      "Brownies": ["1 oz semi-sweet chocolate (28g)", "3 oz high quality dark chocolate, 60-70% cocoa (85g)", "10 tbsp unsalted butter (140g)", "3/4 cup sugar (165g)", "2 eggs, room temperature", "1 tsp instant coffee mixed with 1 tbsp hot water", "1/2 cup all-purpose flour (65g)", "1/3 cup cocoa powder, Dutch processed (35g)", "3/4 tsp salt", "2 oz chocolate chips or chopped chocolate (55g)"]
    },
    instructions: ["Preheat oven to 335°F; line 9-inch pan with parchment and butter.", "Melt butter with chocolates using 20-second microwave intervals.", "Whisk eggs and sugar at medium-high speed for 3-5 minutes until thick and ribbony.", "Fold chocolate mixture into egg mixture at low speed.", "Mix instant coffee with hot water; gently fold in.", "Sift flour, cocoa powder, and salt; fold into batter carefully.", "Fold in chocolate chips.", "Pour into prepared pan; spread evenly.", "Bake 20-25 minutes (typically 22 minutes).", "Cool to room temperature before cutting."],
    tips: ["Use room temperature eggs for best results.", "Do not overbake -- brownies should still look slightly underdone in the center.", "Use high quality chocolate for the best flavor."]
  },
  {
    id: "salted-caramel-pecan-chocolate-chip-cookies",
    name: "Salted Caramel Pecan Chocolate Chip Cookies",
    description: "Thick, gooey, and chewy salted caramel pecan chocolate chip cookies with brown butter dough, loaded with dark and milk chocolate chunks and caramel-coated pecans.",
    category: "Cookies",
    prepTime: "30 minutes",
    cookTime: "12 minutes",
    totalTime: "2 hours (includes chilling)",
    servings: 10,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["10 tbsp unsalted butter (140g)", "1/2 cup packed light brown sugar (150g)", "1/4 cup white sugar (55g)", "1 large egg", "1 egg yolk", "3/4 tsp salt", "1/2 tsp baking powder", "1/4 tsp baking soda", "1 1/3 cup all purpose flour (170g)", "3 oz dark chocolate (113g), chopped", "3 oz milk chocolate (113g), chopped"],
      "Salted Caramel Pecans": ["12 soft caramels (Werther's recommended)", "2 tbsp cream", "3/4 cups pecan halves and pieces (100g), roasted", "Salt to taste"]
    },
    instructions: ["Toast pecans at 350°F for 5-7 minutes until fragrant.", "Melt butter on medium-low heat, stirring until browned with nutty aroma.", "Reduce heat to lowest setting; whisk in sugars for 1-2 minutes.", "Cool mixture for about 5 minutes until warm but not hot.", "Add egg and yolk; whisk 1-2 minutes until light and smooth.", "Fold in dry ingredients (flour, baking powder, baking soda, salt) until almost combined; refrigerate 10 minutes.", "Heat caramels and cream on low until sauce forms; add pecans with salt.", "Fold chocolate and caramel pecans into chilled dough; press onto cookie balls.", "Use 2-inch scoop for portions; press toppings on balls.", "Refrigerate at least 30 minutes (ideally 2+ hours).", "Bake at 375°F for 10-12 minutes."],
    tips: ["Don't overcook butter-sugar mixture to prevent crystallization.", "Sugar reduction is not recommended as it affects texture.", "Use chopped chocolate rather than chips for superior melting.", "Cookies feel firm at edges and soft in center when done; they set more while cooling."]
  },
  {
    id: "3-ingredient-nutella-cookies",
    name: "3 Ingredient Nutella Cookies",
    description: "Soft, chewy Nutella cookies made with just 3 ingredients and ready in 20 minutes.",
    category: "Cookies",
    prepTime: "10 mins",
    cookTime: "12 mins",
    totalTime: "22 mins",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["3/4 cup all purpose flour (98g)", "3/4 cup Nutella (210g), room temperature", "1 large egg, room temperature", "1/4 tsp salt"]
    },
    instructions: ["Preheat oven to 360F (conventional) and line a large cookie sheet with parchment paper.", "Mix the Nutella and egg in a bowl using a hand whisk until combined.", "Sift in the flour and salt, and mix until the mixture forms a soft dough. Avoid over mixing as the dough will become oily.", "Divide the dough into 10-12 balls and gently roll them between your palms to eliminate any large cracks. Place them onto the prepared baking sheet with ~2\" between each.", "Lightly flatten each ball with your fingers or the bottom of a glass.", "Bake for about 12 minutes until the cookies feel set around the edges but still a little soft in the middle.", "Let the cookies cool. Optionally, decorate by drizzling over some warmed Nutella.", "Serve and enjoy."],
    tips: ["You can add chocolate chips or toasted chopped hazelnuts to elevate these cookies.", "Chilling the dough is not necessary unless it feels too sticky to work with.", "Store baked cookies in an airtight container at room temperature for up to 7 days.", "Prepare dough in advance and refrigerate or freeze dough balls; bake directly from fridge with extra time."]
  },
  {
    id: "best-no-bake-cheesecake",
    name: "Best No-Bake Cheesecake",
    description: "A rich and ultra creamy no-bake cheesecake requiring only 10 minutes of work and fewer than 10 ingredients. This indulgent dessert rivals classic versions without the baking hassle.",
    category: "Cheesecakes",
    prepTime: "10 mins",
    cookTime: "0 mins",
    totalTime: "4 hrs 10 mins",
    servings: 10,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
    ingredients: {
      "Crust": ["200g Graham Crackers or Wheat Digestives (about 13-14 sheets)", "90g unsalted butter, melted", "Pinch of salt"],
      "Filling": ["800g cream cheese (28 oz or 3.5 8 oz packs), room temperature", "150g granulated sugar (2/3 cup)", "2 tsp vanilla bean paste", "1/2 tsp salt", "2-4 tbsp lemon juice, to taste", "120g sour cream (1/2 cup)", "120g heavy cream (1/2 cup), chilled"],
      "Topping": ["120g heavy cream (1/2 cup), chilled and whipped", "Fresh berries"]
    },
    instructions: ["Grind graham crackers, then mix with melted butter and salt.", "Line a 9-inch springform pan with parchment paper.", "Press crust mixture tightly onto pan bottom using a measuring cup.", "Mix cream cheese, sugar, vanilla, and salt until creamy (~2 minutes).", "Add sour cream and lemon juice; mix until combined.", "Whisk heavy cream to stiff peaks separately.", "Gently fold whipped cream into cream cheese mixture.", "Pour filling into prepared pan and smooth with offset spatula.", "Refrigerate for 4 hours or overnight until set.", "Decorate with fresh strawberries and whipped cream before serving."],
    tips: ["Substitute for sour cream: Use additional heavy cream plus 1-2 tbsp extra lemon juice.", "Storage: Cover and refrigerate for up to 1 week.", "Freezing: Wrap thoroughly and freeze for up to 3 months; thaw overnight in fridge before serving."]
  },
  {
    id: "paris-hot-chocolate-angelina-cafe-copycat",
    name: "Paris Hot Chocolate (Angelina Cafe Copycat)",
    description: "Inspired by the popular Angelina Cafe in Paris, this hot chocolate is ultra rich, thick, creamy and chocolatey.",
    category: "Drinks",
    prepTime: "1 min",
    cookTime: "5 mins",
    totalTime: "10 mins",
    servings: 3,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["3/4 cup milk (180g)", "1 cup cream (240g)", "2 tbsp powdered sugar", "1/2 tsp espresso powder", "8 oz good quality dark chocolate (226g); between 60-70% cocoa - chopped or chips"]
    },
    instructions: ["Combine all ingredients in a nonstick saucepan and stir.", "Place the pan over medium-low heat, and use a spatula to stir and cook for ~5-7 minutes until the chocolate has fully melted and the mixture comes to a boil.", "Remove from heat and serve while hot, ideally with some plain whipped cream and a fresh croissant."],
    tips: []
  },
  {
    id: "belgian-liege-waffles-blue-bottle-copycat",
    name: "Belgian Liege Waffles (Blue Bottle Copycat)",
    description: "Belgian style Liege waffles featuring a crispy, caramelized crust and chewy interior. This recipe replicates the popular Blue Bottle coffee shop version.",
    category: "Desserts",
    prepTime: "30 mins",
    cookTime: "20 mins",
    totalTime: "1 hr 50 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["1/2 cup milk (120g), warm", "1 tsp active dry yeast", "2 tbsp light brown sugar", "1 large egg", "1 tsp vanilla", "1/2 tsp salt", "2 cups all purpose flour (260g)", "6 tbsp unsalted butter (85g), room temperature", "2/3 cup Pearl sugar (130g)"]
    },
    instructions: ["Add warm milk, active dry yeast and brown sugar to stand mixer bowl. Whisk and rest 10 minutes to activate yeast.", "Add flour, egg, salt and vanilla; knead with dough hook for 3 minutes until dough forms.", "Add softened butter; knead on medium-high speed about 5 minutes until incorporated and soft, stretchy dough forms.", "Transfer to clean bowl, cover with plastic wrap and let rise in warm place until doubled (about 60 minutes).", "Flatten dough on lightly floured surface. Sprinkle half the pearl sugar, press in, and roll up. Flatten again and repeat with remaining sugar. Stretch and knead to fully incorporate.", "Preheat waffle maker for about 10 minutes.", "Divide dough into 4 equal parts.", "Cook waffles until golden and cooked through (~6-7 minutes on medium heat, depending on machine).", "Serve with Nutella and fresh berries or enjoy plain."],
    tips: ["Instant yeast can substitute for active dry yeast using the same quantity; skip the activation step.", "Pearl sugar is essential to authentic Liege waffles; larger grain sugar substitutes not recommended.", "Without a stand mixer, use wooden spoon initially, then hand-knead on counter using push/pull motions; use dough scraper for easier butter incorporation.", "Adjust waffle iron temperature and timing using first waffle as test; perfectly cooked versions have crispy, caramelized crust with soft chewy center."]
  },
  {
    id: "5-minute-carrot-mug-cake",
    name: "5 Minute Carrot Mug Cake",
    description: "A delicious single serve carrot cake made in the microwave with little to no effort, served with a yummy cream cheese frosting.",
    category: "Cakes",
    prepTime: "4 mins",
    cookTime: "1 min",
    totalTime: "5 mins",
    servings: 1,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": ["3 tbsp milk", "1.5 tbsp oil", "1/2 tsp vanilla", "4 tbsp all purpose flour", "2 tbsp sugar", "1/3 tsp baking powder", "1/4 tsp cinnamon", "1/8 tsp salt", "1/4 cup freshly grated carrots"],
      "Frosting": ["1 tbsp cream cheese, room temperature", "1 tbsp heavy cream", "1 tbsp powdered sugar"]
    },
    instructions: ["In a microwave safe mug (~10-12oz), add the milk, oil and vanilla, and whisk to combine.", "Sift in the flour, sugar, baking powder, cinnamon and salt, and mix using a spoon or fork until the dry ingredients are fully mixed in.", "Lastly, add in the grated carrots and mix until combined.", "Microwave for ~60-90 seconds until the cake is cooked through (cooking time can vary).", "Let the cake cool for ~15 minutes.", "Mix the cream cheese, heavy cream and powdered sugar until they form a creamy frosting.", "Cover the cooled cake with the cream cheese frosting, serve and enjoy!"],
    tips: []
  },
  {
    id: "super-soft-chocolate-espresso-rolls",
    name: "Super Soft Chocolate Espresso Rolls",
    description: "Pillowy bread rolls filled with decadent dark chocolate and espresso, topped with coffee icing. These rolls are incredibly soft and perfect for chocolate lovers.",
    category: "Pastries",
    prepTime: "45 mins",
    cookTime: "25 mins",
    totalTime: "2 hrs 35 mins",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop",
    ingredients: {
      "Dough": ["2/3 cup whole milk (160g), warm (100 to 110F)", "1/4 cup sugar (50g)", "2 teaspoons active dry yeast", "2 1/2 cups all purpose flour (325g)", "1 large egg", "1 teaspoon salt", "1/4 cup unsalted butter, softened (60g)"],
      "Chocolate Espresso Filling": ["3 tbsp unsalted butter (42g)", "4-6 tbsp heavy cream", "4 tbsp brown or white sugar", "2 tbsp cocoa powder", "1-2 tsp instant coffee powder", "100g semi-sweet or dark chocolate"],
      "Espresso Icing": ["1/4 cup heavy cream (60g)", "1 cup powdered sugar (130g)", "1/2 tsp instant coffee powder", "2-4 tbsp heavy cream"]
    },
    instructions: ["Mix warm milk, yeast and sugar; wait 10 minutes until frothy.", "Add remaining dough ingredients; knead 7-10 minutes until smooth and stretchy.", "Place in oiled bowl, cover and let rise 60-90 minutes until doubled.", "Heat butter, cream, cocoa, coffee and sugar until melted.", "Add chocolate and stir until melted; cool completely.", "Adjust flavoring to taste; mixture should be thick and spreadable.", "Roll out dough into 12x14\" rectangle on floured surface.", "Spread filling evenly over dough.", "Divide into 6 strips (2\" wide, 14\" long).", "Roll each strip into individual rolls.", "Place in buttered pan; let rise 30-45 minutes until puffed.", "Preheat oven to 375F 20 minutes before second rise completes.", "Pour cream evenly over rolls.", "Bake 20-25 minutes until light golden.", "Whisk icing ingredients together, adjusting consistency as needed.", "Spread icing on warm rolls.", "Serve and enjoy."],
    tips: ["Can substitute egg with 1/4 cup full fat yogurt for egg-free version.", "Instant yeast can replace active dry yeast; skip the initial blooming step.", "Milk chocolate works if preferred; reduce sugar in filling to taste.", "Hand kneading is possible without a stand mixer.", "Store in airtight container at room temperature for up to 2 days; refrigerate longer and microwave 10-15 seconds before serving.", "Recipe can be doubled using a 9x13\" pan.", "Do overnight cold rise: prepare rolls, refrigerate overnight, then bake fresh in morning."]
  },
  {
    id: "best-chewy-snickerdoodle-cookies",
    name: "Best Chewy Snickerdoodle Cookies",
    description: "Crispy on the edges, soft and chewy in the middle snickerdoodle cookies that are easy to make with a balanced cinnamon-sugar flavor.",
    category: "Cookies",
    prepTime: "15 mins",
    cookTime: "11 mins",
    totalTime: "26 mins",
    servings: 18,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["18 tbsp butter (1 cup + 2 tbsp, or 255g), room temperature", "1/2 cup granulated sugar (100g)", "1 cup light or dark brown sugar, packed (200g)", "1 large egg, room temperature", "2 egg yolks, room temperature", "2 tsp vanilla", "3 1/3 cups flour (435g)", "2 1/4 tsp cream of tartar", "1 1/4 tsp baking soda", "1/4 tsp baking powder", "1 tsp salt"],
      "Cinnamon Sugar Coating": ["1/2 cup granulated sugar (100g)", "1 tbsp cinnamon"]
    },
    instructions: ["Bring butter and eggs to room temperature.", "Whisk together butter, granulated sugar and brown sugar for 2-3 minutes until light, fluffy and creamy.", "Add egg, egg yolks and vanilla; whisk until smooth and creamy.", "Sift flour, cream of tartar, baking soda, baking powder, and salt in separate bowl; whisk to combine.", "Fold dry ingredients into wet in 2-3 additions using rubber spatula; stop when combined.", "Scoop dough into 18-20 balls using 2\" cookie scoop.", "Chill in refrigerator overnight or at least 2 hours.", "Preheat oven to 375F and line baking sheets with parchment paper.", "Roll each dough ball in cinnamon-sugar mixture; place on sheets 3\" apart.", "Bake at 375F for 11-12 minutes until edges feel set but center is soft.", "Cool for 20 minutes before serving."],
    tips: ["Brown sugar is essential for the chewy texture; either light or dark brown sugar works.", "Cream of tartar cannot be skipped; it's critical for both flavor and texture.", "Chilling improves texture and flavor, though you may skip it if needed.", "Store in airtight container at room temperature for up to 3 days, or refrigerate for longer."]
  },
  {
    id: "the-best-strawberry-cheesecake",
    name: "The Best Strawberry Cheesecake",
    description: "An ultra creamy, silky cheesecake with firm edges and jiggly center, topped with fresh strawberry compote for a perfectly balanced dessert ideal for summer.",
    category: "Cheesecakes",
    prepTime: "1 hr",
    cookTime: "1 hr 15 mins",
    totalTime: "2 hrs 15 mins",
    servings: 12,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop",
    ingredients: {
      "Crust": ["190g graham crackers", "35g sugar (about 3 tbsp)", "75g melted unsalted butter (about 5 tbsp)"],
      "Cheesecake": ["32 oz full-fat cream cheese (4 8oz blocks), at room temperature", "325g granulated sugar (1 1/2 cups)", "1/2 tsp salt", "1 tsp vanilla essence", "4 large eggs, room temperature", "120g heavy cream (1/2 cup), room temperature", "240g sour cream (1 cup), room temperature", "1 tbsp cornstarch", "2-3 tablespoon lemon juice"],
      "Strawberry Compote": ["1 lb strawberries, roughly chopped in large chunks", "55g sugar (1/4 cup)", "1 tsp cornstarch", "Juice of 1/2 a lemon", "Fresh strawberries for decoration (optional)"]
    },
    instructions: ["Bring all ingredients to room temperature.", "Preheat oven to 350F (conventional).", "Grind graham crackers, sugar and butter in food processor until smooth.", "Butter springform pan bottom, add crust, pack tightly, bake 8 min at 350F, then set oven to 325F.", "Cream cheese for 2-3 min until creamy, add sugar, mix 3-5 min until combined.", "Whisk eggs separately (don't overbeat), add slowly to batter at low speed until just combined.", "Add cream, sour cream, lemon juice, salt, vanilla and cornstarch, mix at low speed until just combined.", "Pour batter into crust, seal pan tightly with foil on outside only.", "Place pan in water bath (1-2 inches boiling water) and bake 75-80 min without opening oven until edges are firm but center is jiggly.", "Cool at room temperature 2-3 hours, then refrigerate overnight.", "Mix strawberries, sugar, cornstarch and lemon juice in saucepan, cook on low heat 5-7 minutes until saucy and thick, let cool completely.", "Transfer cooled cheesecake to serving stand and cover with strawberry compote.", "Decorate with fresh strawberries, serve and enjoy."],
    tips: ["You can make homemade sour cream: mix 1 cup heavy cream, 1/4 cup milk and 1 tbsp lemon juice or vinegar, cover and rest 12-24 hours at room temperature.", "Wheat digestive biscuits are a substitute for graham crackers.", "Cheesecake keeps well in refrigerator for several days; save strawberry compote for the end.", "Freeze cheesecake without compote; defrost overnight in fridge before eating.", "Recipe can be halved in a 9\" pan for ~45-50 minutes or in a 6-7\" pan."]
  },
  {
    id: "the-best-banana-chocolate-chip-muffins",
    name: "The Best Banana Chocolate Chip Muffins",
    description: "Soft and moist brown butter banana chocolate chip muffins loaded with chocolate chips and a chocolate ganache filling.",
    category: "Cakes",
    prepTime: "20 mins",
    cookTime: "30 mins",
    totalTime: "1 hr",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12571?w=600&h=400&fit=crop",
    ingredients: {
      "Muffins": ["1/2 cup unsalted butter (113g)", "3/4 cup light brown sugar, packed (150g)", "2 eggs", "1 tsp vanilla", "1 tsp instant coffee + 1 tsp hot water (optional)", "3 large extra ripe bananas, mashed (about 400g)", "1/2 cup sour cream (120g) or sub greek yogurt", "1 3/4 cups all purpose flour (227g)", "1 tsp baking powder", "1/2 tsp baking soda", "1/2 tsp salt", "1 cup chocolate chips, chunks or chopped choc of choice (200g)"],
      "Ganache": ["1/2 cup dark or semi-sweet chocolate chips (100g)", "1/3 cup heavy cream (80g)"]
    },
    instructions: ["Pre-heat oven to 375F and line a jumbo muffin tray with parchment paper or muffin liners.", "Melt the butter in a nonstick saucepan and stir over medium-low heat until brown and fragrant.", "Add the brown butter to a bowl with brown sugar and whisk for 1-2 minutes.", "Wait 3-5 minutes, then add eggs, vanilla and instant coffee mixture. Whisk until smooth and caramel-like.", "Add mashed bananas and sour cream and whisk until combined.", "Sift in flour, baking powder, baking soda and salt. Gently fold until just combined.", "Fold in the chocolate chips/chunks.", "Divide batter evenly between muffin cups, top with additional chocolate chips if desired.", "Bake for ~27-30 minutes until a toothpick comes out with light, moist crumbs.", "While baking, heat cream until it boils and pour over chocolate. Cover 5 minutes, then stir until smooth.", "Once muffins cool slightly, fill with ganache using a piping bag with round tip.", "Serve and enjoy while warm when ganache and chocolate are soft."],
    tips: ["Brown sugar gives the best flavor and texture; white sugar is an acceptable substitute.", "This recipe requires brown butter -- regular melted butter is not recommended.", "Greek yogurt can replace sour cream in this recipe.", "Bananas ripen fastest in a cool, dark place in a paper bag.", "The chocolate ganache filling is optional; these work as regular banana chocolate chip muffins.", "Batter can be baked as banana chocolate chip bread in a loaf pan for 45-50 minutes.", "Can be made as smaller muffins or cupcakes with reduced baking time.", "Store at room temperature for up to 2 days or refrigerate for up to 1 week."]
  },
  {
    id: "brown-butter-brookies",
    name: "Brown Butter Brookies",
    description: "Fudgy brownies meet chewy chocolate chip cookies in these delicious, gooey and decadent brown butter brookies.",
    category: "Brownies",
    prepTime: "30 mins",
    cookTime: "35 mins",
    totalTime: "1 hr 5 mins",
    servings: 16,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": ["10 tbsp unsalted butter (140g)", "1/2 cup packed light or dark brown sugar (100g)", "1/4 cup granulated sugar (50g)", "1 large egg", "1 egg yolk", "1 tsp vanilla bean paste", "1 tsp instant coffee + 1 tsp water", "1 1/4 cup all purpose flour (163g)", "3/4 tsp salt", "1/2 tsp baking powder", "1/4 tsp baking soda", "6 oz chopped chocolate, mix of milk and dark recommended (170g)"],
      "Brownie Batter": ["10 tbsp unsalted butter (140g)", "4 oz high quality dark chocolate (113g), between 60-70% cocoa, chopped", "1 tsp instant coffee mixed with 1 tablespoon hot water", "1/3 cup cocoa powder (35g); Dutch processed preferred", "2 large eggs, room temperature", "1 cup granulated sugar (200g)", "1/2 cup all purpose flour (65g)", "3/4 tsp salt", "3 oz chopped chocolate (85g); milk and dark combined"]
    },
    instructions: ["Melt butter in a non-stick pan on medium-low heat, stirring until brown with a nutty aroma.", "Add sugars and whisk on lowest flame for 1-2 minutes; mixture may look grainy.", "Cool for 5 minutes until warm but not hot.", "Add egg and yolk, whisk quickly. Add vanilla and instant coffee mixture, whisk 1-2 minutes until smooth.", "Sift dry ingredients into separate bowl with chopped chocolate; mix together.", "Fold dry ingredients into wet in two batches; do not overmix.", "Preheat oven to 350F and prepare 9x9 square pan with parchment paper.", "Melt and brown butter for brownie batter as done previously.", "Pour hot brown butter over chopped dark chocolate in heat-safe bowl; rest 2-3 minutes, then stir until smooth.", "Add instant coffee dissolved in hot water; sift in cocoa powder and whisk until smooth.", "Whisk eggs and sugar in separate bowl for several minutes until light, thick, and fluffy.", "Pour chocolate mixture into egg mixture and whisk until combined.", "Sift in flour and salt; fold until just combined.", "Fold in chopped chocolate.", "Spread thin brownie layer in prepared pan.", "Dollop cookie dough chunks with some brownie batter showing through; alternate brownie batter dollops with cookie batter visible.", "Flatten lightly with spatula; optionally sprinkle more chocolate on top.", "Bake for approximately 35 minutes.", "Cool in pan outside oven for at least 20 minutes, then remove and cut with sharp knife."],
    tips: ["Do not use regular butter instead of brown butter; recipe developed specifically for brown butter.", "Check doneness with toothpick in center; should come out with moist crumbs and gooey batter.", "Lean toward underbaking rather than overbaking when uncertain.", "Store in airtight container at room temperature for up to 3 days; reheat in microwave.", "Making brookies in advance not recommended as texture best when freshly baked."]
  },
  {
    id: "easy-shahi-tukray",
    name: "Easy Shahi Tukray",
    description: "A no-bake South Asian dessert made with fried bread soaked in sweetened cardamom milk. Takes only 15 minutes of active work with just 6 ingredients.",
    category: "Middle Eastern",
    prepTime: "15 mins",
    cookTime: "0 mins",
    totalTime: "15 mins",
    servings: 8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["1 pack Original Hawaiian Sweet Rolls (12 rolls) or brioche/white bread (~350g)", "6-8 tbsp unsalted butter (113g)", "5 cups whole milk (1200g)", "4-6 cardamom pods", "Pinch of salt", "3/4 of 14oz can sweetened condensed milk (~300g)"]
    },
    instructions: ["Slice Hawaiian Rolls horizontally in half.", "Pan fry in butter until golden and crispy on both sides.", "Bring milk, cardamom pods, and salt to boil; simmer 5 minutes. Add condensed milk to taste.", "Arrange fried rolls in serving dish, stacking neatly.", "Strain milk mixture over rolls to cover completely.", "Cover and refrigerate 2+ hours until cooled.", "Garnish with slivered almonds and crushed freeze-dried strawberries.", "Serve and enjoy."],
    tips: ["Can substitute brioche or any soft bread; texture matters more than specific type.", "Oil can replace butter but butter provides superior taste.", "Prepare 1-2 days ahead; refrigerate in airtight container for 5-7 days.", "Replace cardamom with vanilla or cinnamon if preferred."]
  },
  {
    id: "easy-gulab-jamun",
    name: "Easy Gulab Jamun",
    description: "An easy homemade gulab jamun using milk powder instead of khoya for softer, better-than-bakery results. Perfect for special occasions.",
    category: "Middle Eastern",
    prepTime: "20 mins",
    cookTime: "10 mins",
    totalTime: "1 hr",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Dough": ["1 cup milk powder (100g)", "3 tbsp all purpose flour (~30g)", "1 1/2 tsp baking powder", "1 egg (or 3-4 tbsp milk substitute)", "3 tbsp heavy cream (~40g)", "2 tbsp melted ghee (30g)"],
      "Syrup": ["1 1/4 cups water", "1 cup sugar", "1-2 cardamom pods", "Optional: saffron and rose water"]
    },
    instructions: ["Combine milk powder, flour, and baking powder in a bowl.", "Whisk together melted ghee, egg, and cream separately.", "Mix wet ingredients into dry mixture to form dough.", "Knead gently for 1-2 minutes and refrigerate 20 minutes.", "Knead again until smooth, adding milk if too dry.", "Form 12 balls about 20g each, ensure smooth surface.", "Heat 2 inches oil in a wok on medium heat.", "Prepare syrup by boiling sugar, water, and cardamom; keep covered.", "Fry balls in batches on low heat until they rise and turn brown (4 min).", "Transfer to hot syrup immediately after frying.", "Let soak at least 30 minutes before serving.", "Serve warm or chilled."],
    tips: ["Substitute egg with 3-4 tbsp milk if needed.", "Avoid overworking dough and frying on low heat to prevent dense results.", "Keep dough soft; add milk if it feels dry to prevent cracking.", "Store in airtight container in refrigerator for 5 days.", "Microwave for 10-15 seconds before serving for best texture."]
  },
  {
    id: "mango-chantilly-swiss-roll-cake",
    name: "Mango Chantilly Swiss Roll Cake",
    description: "A light chiffon cake filled with whipped Chantilly cream and fresh mango slices, featuring a delicate sponge brushed with mango syrup.",
    category: "Cakes",
    prepTime: "30 mins",
    cookTime: "15 mins",
    totalTime: "1 hr 30 mins",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop",
    ingredients: {
      "Chiffon Cake": ["4 large eggs, room temperature and separated", "110g sugar (1/2 cup)", "65g all purpose flour (1/2 cup)", "30g cornstarch (3 tbsp)", "1/4 tsp salt", "20g oil (~1.5 tbsp)", "60g milk (1/4 cup)", "1/2 tsp vanilla", "1/4 tsp cream of tartar"],
      "Mango Simple Syrup": ["55g sugar (1/4 cup)", "55g water (1/4 cup)", "Handful of mango chunks (frozen or fresh)"],
      "Chantilly Cream": ["2 cups heavy whipping cream, chilled", "3 tbsp sugar", "1/2 tsp vanilla"],
      "Assembly & Decoration": ["Powdered sugar", "2-3 mangoes, sliced"]
    },
    instructions: ["Preheat oven to 325F and line a 9x13\" pan with parchment paper.", "Combine egg yolks, sugar, salt, vanilla, oil and milk; whisk until combined.", "Sift in flour and cornstarch; whisk until combined.", "Whip egg whites with cream of tartar to stiff peaks on medium speed.", "Fold one-third of egg whites into yolk mixture, then fold in remaining whites gently.", "Bake for 13-15 minutes until done.", "Dust warm cake with powdered sugar, invert onto parchment, remove bottom paper, dust again.", "Roll cake while warm along the length with parchment inside for flexibility.", "Cool cake completely.", "Combine water, sugar and mango chunks in saucepan; simmer until sugar dissolves.", "Strain mango out and cool syrup.", "Whip heavy cream with sugar and vanilla to firm peaks.", "Unroll cooled cake carefully.", "Brush cake generously with mango syrup using pastry brush.", "Spread thick layer of whipped cream evenly.", "Cover cake with thinly sliced mango.", "Roll cake again in same direction without rolling too tightly.", "Refrigerate for 30 minutes.", "Trim edges with sharp serrated knife.", "Dust with powdered sugar.", "Pipe remaining whipped cream and decorate with chopped mango.", "Serve and enjoy."],
    tips: ["Cream of tartar is optional and can be omitted.", "Under-whipping egg whites or overmixing batter causes dense cake; be ultra gentle folding to preserve air.", "Minor cracking is normal; avoid rolling immediately after baking or rolling too tightly.", "Chiffon cakes naturally deflate slightly as hot air escapes; significant deflation indicates underbaking."]
  },
  {
    id: "viral-chocolate-mug-cake",
    name: "Viral Chocolate Mug Cake",
    description: "A viral TikTok chocolate mug cake that's moist, rich, and decadent, made with simple ingredients in just 5 minutes.",
    category: "Cakes",
    prepTime: "4 mins",
    cookTime: "1 min",
    totalTime: "5 mins",
    servings: 1,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop",
    ingredients: {
      "Main": ["4 tbsp milk", "1.5 tbsp oil", "3 tbsp sugar", "4 tbsp flour", "2 tbsp cocoa powder", "1/3 tsp baking powder", "1/8 tsp salt", "2-3 tbsp milk chocolate chips", "Optional: Nutella to serve"]
    },
    instructions: ["Add milk and oil to a 10-12oz microwave-safe mug and mix well with a fork.", "Add sugar and mix it in.", "Sift in dry ingredients (flour, cocoa powder, baking powder, salt) and gently stir, scraping edges.", "Add chocolate chips and stir.", "Clean mug edges if needed and microwave for 60-90 seconds.", "Spread Nutella on top and serve."],
    tips: ["Use a 10-12oz microwave-safe mug that's not too wide or narrow.", "Sift dry ingredients to avoid lumps in the final cake.", "Measure ingredients precisely to prevent cake from exploding or becoming rubbery.", "Stop cooking once the cake is soft but not wet on top to avoid dryness.", "Sugar can be reduced to as low as 1.5 tbsp if preferred."]
  }
];
