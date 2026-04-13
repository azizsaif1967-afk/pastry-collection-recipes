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
  }
];
