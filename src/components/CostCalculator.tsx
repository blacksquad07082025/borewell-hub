import { useState, useEffect } from 'react';
import { Calculator, Plus, Trash2, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Pre-loaded rate slabs
const DRILLING_RATES = {
  '6.5': [
    { min: 0, max: 300, rate: 84 },
    { min: 301, max: 400, rate: 105 },
    { min: 401, max: 500, rate: 125 },
  ],
  '4.5': [
    { min: 0, max: 300, rate: 75 },
    { min: 301, max: 400, rate: 95 },
    { min: 401, max: 500, rate: 115 },
  ],
  'rebore': [
    { min: 0, max: 300, rate: 65 },
    { min: 301, max: 400, rate: 85 },
    { min: 401, max: 500, rate: 105 },
  ],
};

const CASING_RATES = {
  '8-gauge': 380,
  '10-gauge': 350,
  '6-gauge': 300,
};

interface ExtraCost {
  id: string;
  description: string;
  cost: number;
}

const CostCalculator = () => {
  const [borewellType, setBorewellType] = useState<string>('');
  const [depth, setDepth] = useState<number>(0);
  const [casingType, setCasingType] = useState<string>('');
  const [casingLength, setCasingLength] = useState<number>(0);
  const [transportCost, setTransportCost] = useState<number>(5000);
  const [labourCost, setLabourCost] = useState<number>(8000);
  const [extraCosts, setExtraCosts] = useState<ExtraCost[]>([]);
  const [profitMargin, setProfitMargin] = useState<number>(15);
  const [newExtraDescription, setNewExtraDescription] = useState('');
  const [newExtraCost, setNewExtraCost] = useState<number>(0);
  
  const [drillingCost, setDrillingCost] = useState<number>(0);
  const [casingCost, setCasingCost] = useState<number>(0);
  const [totalExtraCosts, setTotalExtraCosts] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [finalTotal, setFinalTotal] = useState<number>(0);

  const { toast } = useToast();

  const calculateDrillingCost = (type: string, depth: number) => {
    if (!type || !depth) return 0;
    
    const rates = DRILLING_RATES[type as keyof typeof DRILLING_RATES];
    let cost = 0;
    let remainingDepth = depth;

    for (const slab of rates) {
      if (remainingDepth <= 0) break;
      
      const slabDepth = Math.min(remainingDepth, slab.max - slab.min + 1);
      if (depth > slab.min) {
        const applicableDepth = Math.min(slabDepth, Math.max(0, depth - slab.min));
        cost += applicableDepth * slab.rate;
        remainingDepth -= applicableDepth;
      }
    }

    return cost;
  };

  const calculateCasingCost = (type: string, length: number) => {
    if (!type || !length) return 0;
    return CASING_RATES[type as keyof typeof CASING_RATES] * length;
  };

  useEffect(() => {
    const drilling = calculateDrillingCost(borewellType, depth);
    const casing = calculateCasingCost(casingType, casingLength);
    const extra = extraCosts.reduce((sum, item) => sum + item.cost, 0);
    const sub = drilling + casing + transportCost + labourCost + extra;
    const final = sub + (sub * profitMargin / 100);

    setDrillingCost(drilling);
    setCasingCost(casing);
    setTotalExtraCosts(extra);
    setSubtotal(sub);
    setFinalTotal(final);
  }, [borewellType, depth, casingType, casingLength, transportCost, labourCost, extraCosts, profitMargin]);

  const addExtraCost = () => {
    if (!newExtraDescription || newExtraCost <= 0) return;
    
    const newItem: ExtraCost = {
      id: Date.now().toString(),
      description: newExtraDescription,
      cost: newExtraCost,
    };
    
    setExtraCosts([...extraCosts, newItem]);
    setNewExtraDescription('');
    setNewExtraCost(0);
  };

  const removeExtraCost = (id: string) => {
    setExtraCosts(extraCosts.filter(item => item.id !== id));
  };

  const generateInvoice = () => {
    toast({
      title: "Invoice Generated!",
      description: "Invoice has been created and is ready for sharing.",
    });
  };

  const sendQuote = () => {
    toast({
      title: "Quote Sent!",
      description: "Cost quote has been sent via WhatsApp.",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Borewell Cost Calculator</CardTitle>
              <CardDescription>
                Calculate costs with pre-loaded rate slabs for all drilling types
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-drilling-65">Drilling Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="borewell-type">Borewell Type</Label>
                  <Select value={borewellType} onValueChange={setBorewellType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select drilling type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6.5">6.5" Borewell</SelectItem>
                      <SelectItem value="4.5">4.5" Borewell</SelectItem>
                      <SelectItem value="rebore">Re-bore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="depth">Depth (feet)</Label>
                  <Input
                    id="depth"
                    type="number"
                    value={depth}
                    onChange={(e) => setDepth(Number(e.target.value))}
                    placeholder="Enter depth"
                  />
                </div>
              </div>

              {borewellType && (
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Rate Slabs for {borewellType === '6.5' ? '6.5"' : borewellType === '4.5' ? '4.5"' : 'Re-bore'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    {DRILLING_RATES[borewellType as keyof typeof DRILLING_RATES].map((slab, index) => (
                      <Badge key={index} variant="outline" className="justify-center">
                        {slab.min}-{slab.max}ft: ₹{slab.rate}/ft
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-casing">Casing Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="casing-type">Casing Type</Label>
                  <Select value={casingType} onValueChange={setCasingType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select casing gauge" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8-gauge">8 Gauge (₹380/ft)</SelectItem>
                      <SelectItem value="10-gauge">10 Gauge (₹350/ft)</SelectItem>
                      <SelectItem value="6-gauge">6 Gauge (₹300/ft)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="casing-length">Casing Length (feet)</Label>
                  <Input
                    id="casing-length"
                    type="number"
                    value={casingLength}
                    onChange={(e) => setCasingLength(Number(e.target.value))}
                    placeholder="Enter casing length"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-warning">Additional Costs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transport">Transport Cost (₹)</Label>
                  <Input
                    id="transport"
                    type="number"
                    value={transportCost}
                    onChange={(e) => setTransportCost(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="labour">Labour Cost (₹)</Label>
                  <Input
                    id="labour"
                    type="number"
                    value={labourCost}
                    onChange={(e) => setLabourCost(Number(e.target.value))}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-semibold">Extra Cost Items</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <Input
                    placeholder="Description"
                    value={newExtraDescription}
                    onChange={(e) => setNewExtraDescription(e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="Cost"
                    value={newExtraCost}
                    onChange={(e) => setNewExtraCost(Number(e.target.value))}
                  />
                  <Button onClick={addExtraCost} className="bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>

                {extraCosts.length > 0 && (
                  <div className="space-y-2">
                    {extraCosts.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <span className="font-medium">{item.description}</span>
                          <span className="text-muted-foreground ml-2">₹{item.cost.toLocaleString()}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeExtraCost(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-elegant sticky top-24">
            <CardHeader>
              <CardTitle className="text-success">Cost Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Drilling Cost:</span>
                  <span className="font-medium">₹{drillingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Casing Cost:</span>
                  <span className="font-medium">₹{casingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transport:</span>
                  <span className="font-medium">₹{transportCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Labour:</span>
                  <span className="font-medium">₹{labourCost.toLocaleString()}</span>
                </div>
                {totalExtraCosts > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Extra Costs:</span>
                    <span className="font-medium">₹{totalExtraCosts.toLocaleString()}</span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-semibold">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profit">Profit Margin (%)</Label>
                  <Input
                    id="profit"
                    type="number"
                    value={profitMargin}
                    onChange={(e) => setProfitMargin(Number(e.target.value))}
                  />
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>Grand Total:</span>
                  <span>₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <Button onClick={generateInvoice} className="w-full bg-gradient-primary">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Invoice
                </Button>
                <Button onClick={sendQuote} variant="outline" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;